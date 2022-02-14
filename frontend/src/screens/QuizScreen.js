import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {tabTitle} from "../utils/generalFunctions";
import {QuizButton} from "../components/buttons";
import {MDBInput} from 'mdb-react-ui-kit';
import {retrieveQuizRangeList} from "../redux/actions/quizActions";
import Modal from "../components/modal";

import '../styles/base.css'
import {QUIZ_ANSWER_SUBMIT_RESET} from "../redux/constants/quizConstants";
import {MDBIcon} from "mdbreact";


function QuizScreen() {

    tabTitle('QUIZ - VOCUP');

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const quizzes = useSelector(state => state.quizRange);
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin;
    const {quizRangeList: quizList} = quizzes;

    const [isAmount, setIsAmount] = useState(true);
    const [quizAmount, setQuizAmount] = useState(0);
    const [isScore, setIsScore] = useState(false);
    const [answers, setAnswers] = useState([]);

    const [quizIndex, setQuizIndex] = useState(0);

    useEffect(() => {

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

    return (
        <div className="container">

            {isAmount ?
                <div>
                    <div className="w-50 m-auto">
                        <MDBInput
                            className="mt-32"
                            label='How many quizzes do you want to take?'
                            id='formControlLg'
                            type='text'
                            size='lg'
                            onChange = {e => setQuizAmount(e.target.value)}
                            onKeyDown={event => handleSetAmount(event)}
                        />
                    </div>
                        <div className="d-flex mt-2" style={{color: "purple"}}>
                        <button
                            className="m-auto"
                            onClick={() => quizAmount > 0 && setIsAmount(false)}
                        >
                        <MDBIcon
                            className="fa-3x"
                            fas
                            icon="chevron-circle-right"/>
                        </button>
                        </div>
                    </div>
                :
                !isScore ?
                    <div className="d-flex justify-content-center">
                    <div className="p-10 w-full">
                        <div className="d-flex justify-content-center mb-3">
                        {quizList && <h1>{quizList[quizIndex].question}</h1>}
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

        </div>
    );
}

export default QuizScreen;
