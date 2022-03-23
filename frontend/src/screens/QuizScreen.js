import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {tabTitle} from "../utils/generalFunctions";
import {QuizButton} from "../components/buttons";
import {MDBBtn, MDBInput} from 'mdb-react-ui-kit';
import {removeAllQuizzes, retrieveQuizRangeList} from "../redux/actions/quizActions";
import Modal from "../components/modal";

import '../styles/base.css'
import {
    QUIZ_ANSWER_SUBMIT_RESET,
    QUIZ_LIST_REMOVE_RESET,
    QUIZ_RANGE_LIST_RESET
} from "../redux/constants/quizConstants";
import {MDBIcon} from "mdbreact";
import {FillSpinner} from "../components/spinner";
import {capitalize} from "../helpers/capitalize";
import notify from "../utils/notification";


function QuizScreen() {

    tabTitle('QUIZ - VOCUP');

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const quizzes = useSelector(state => state.quizRange);
    const userLogin = useSelector(state => state.userLogin)
    const quizzesRemove = useSelector(state => state.removeQuiz)
    const {userInfo} = userLogin;
    const {loading:quizRangeLoading, quizRangeList: quizList, error: quizRangeError} = quizzes;
    const {loading: removeLoading, status, error: removeError, success:removeSuccess} = quizzesRemove

    const [isAmount, setIsAmount] = useState(true);
    const [quizAmount, setQuizAmount] = useState(0);
    const [isScore, setIsScore] = useState(false);
    const [answers, setAnswers] = useState([]);



    const [quizIndex, setQuizIndex] = useState(0);

    useEffect(() => {
        dispatch({type: QUIZ_LIST_REMOVE_RESET})

        if (userInfo) {
            !isAmount && dispatch(retrieveQuizRangeList(quizAmount));
        } else {
            navigate('/login')
        }
    }, [dispatch, isAmount, navigate, quizAmount, userInfo])


    const total_quiz = quizList && quizList.length

    const handleSetAmount = (event) => {
        if (event.key === 'Enter') {
            setQuizAmount(event.target.value);
            setIsAmount(false);
        }
    }


    const handleQuizIndex = (id, answer) => {
        let answeredAnswer = {}
        if (answer === quizList[quizIndex].correctAnswer) {
            answeredAnswer = {
                id: id,
                question: quizList[quizIndex].question,
                answer: answer,
                isCorrect: true,
                correctAnswer: quizList[quizIndex].correctAnswer
            }
            setAnswers([...answers, answeredAnswer])
        } else {
            answeredAnswer = {
                id: id,
                question: quizList[quizIndex].question,
                answer: answer,
                isCorrect: false,
                correctAnswer: quizList[quizIndex].correctAnswer
            }
            setAnswers([...answers, answeredAnswer])
        }
        if (quizIndex < total_quiz - 1) {
            setQuizIndex(quizIndex + 1)
        } else {
            setIsScore(true);
        }

    }

    let toggleModal = () => {
        setIsScore(!isScore)
        setAnswers([]);
        setQuizIndex(0);
        dispatch({type: QUIZ_ANSWER_SUBMIT_RESET})

    }

    const updateQuiz = () => {
        dispatch(removeAllQuizzes())
    }

    if (removeSuccess) {
        setTimeout(() => {
            dispatch({type: QUIZ_LIST_REMOVE_RESET})
        }, 2000)
    }

    return (
        <div className="h-full min-h-screen bg-slate-300">
        <div className="container">

            {quizRangeError && <h1>Please enter less than or equal to the amount of vocabulary objects.</h1>}

            {isAmount ?
                <div className="pt-32">
                    <div className="w-100 m-auto">
                        <MDBInput
                            // className="pt-32"
                            label='How many quizzes do you want to answer?'
                            id='formControlLg'
                            type='text'
                            size='lg'
                            onChange={e => setQuizAmount(e.target.value)}
                            onKeyDown={event => handleSetAmount(event)}
                        />
                    </div>
                    <div className="d-flex mt-2" style={{color: ""}}>
                        {/*<button*/}
                        {/*    className="m-auto"*/}
                        {/*    onClick={() => quizAmount > 0 && setIsAmount(false)}*/}
                        {/*>*/}
                        {/*    <MDBIcon*/}
                        {/*        className="fa-3x"*/}
                        {/*        fas*/}
                        {/*        icon="chevron-circle-right"/>*/}
                        {/*</button>*/}
                        <button type="button" onClick={() => quizAmount > 0 && setIsAmount(false)}
                                className="mx-auto
                                 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                      clip-rule="evenodd"></path>
                            </svg>
                        </button>



                    </div>
                </div>
                :
                !isScore ?
                    <div className="d-flex justify-content-center">
                        <div className="p-10 w-full">
                            <div className="d-flex justify-content-center mb-3">
                                { quizRangeLoading && <div className="mt-20"><FillSpinner /></div>}
                                {quizList && <h1>{capitalize(quizList[quizIndex].question)}</h1>}
                                <div className="d-flex">
                                    {quizList && <h6 style={{color: "purple"}}>{quizIndex + 1}/{quizList.length}</h6>}
                                </div>
                            </div>
                            {quizList && quizList[quizIndex].answers.map((answer, index) => {
                                return (
                                    <div key={index} className="d-flex justify-content-center">
                                        <QuizButton
                                            question={quizList[quizIndex].question}
                                            index={index}
                                            handleQuizIndex={handleQuizIndex}
                                            title={answer}
                                            id={quizList[quizIndex].id}
                                        />
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                    :
                    <Modal isScore={isScore} answeredAnswers={answers} toggleIsScore={toggleModal}/>
            }

                {
                !removeLoading && !removeError && quizAmount < 1 ?


                    <MDBBtn size="lg" className="position-absolute lg:bottom-10 lg:right-10 right-10 bottom-10" onClick={updateQuiz} rounded>Randomize Quiz</MDBBtn>

                : !removeError && quizAmount < 1 ?
                <>
                <p className="position-absolute bottom-10 right-36">Generating new quizzes.....</p>

                <MDBIcon
                className="position-absolute bottom-10 right-10"
                icon="sync"
                spin size="3x"
                />
                </>

                : null
            }
            {
                removeSuccess &&
                <p className="position-absolute bottom-8 lg:right-56">Done. Go ahead.</p>
            }

        </div>
        </div>

    );
}

export default QuizScreen;
