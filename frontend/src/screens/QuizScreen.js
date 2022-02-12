import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import '../styles/base.css'
import {listWords} from '../redux/actions/wordActions';
import {tabTitle} from "../utils/generalFunctions";
import Table from "../components/table";
import Input from "../components/input";
import {PrimaryResBtn, QuizButton} from "../components/buttons";
import {retrieveQuizList} from "../redux/actions/quizActions";
import * as PropTypes from "prop-types";
import {MDBContainer, MDBInput} from "mdbreact";
import Quiz from "../components/quizComponent";
import {retrieveQuizRangeList} from "../redux/actions/quizActions";


function QuizScreen() {

    tabTitle('QUIZ - VOCUP');

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const quizzes = useSelector(state => state.quizRange);
    // const [quizAnswerResponse, setQuizAnswerResponse] = useState(null);
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin;
    const {quizRangeList:quizList} = quizzes;

    const [quiz, setQuiz] = useState(null);
    const [isAmount, setIsAmount] = useState(true);
    const [quizAmount, setQuizAmount] = useState(0);

    const [quizIndex, setQuizIndex] = useState(0);

    useEffect(() => {
        if (userInfo) {
            dispatch(retrieveQuizRangeList(quizAmount));
        } else {
            navigate('/login')
        }
    }, [dispatch, navigate, quizAmount, userInfo])

    useEffect(() => {
        if (quizList) {
            setQuiz(quizList[quizIndex]);
        }
    }, [quizList, quizIndex])

    const handleSetAmount = (event) => {
        if (event.key === 'Enter') {
            setQuizAmount(event.target.value);
            setIsAmount(false);
        }
    }

    const handleQuiz = (quiz) => {
        let question = quiz.question;
        let answers = [quiz.op1, quiz.op2, quiz.op3, quiz.correct_answer];
        let randomized_answers = answers.sort(() => Math.random() - 0.5);
        let correctAnswer = quiz.correctAnswer;
        let quizId = quiz.id;
        let quizObj = {
            question: question,
            answers: randomized_answers,
            correctAnswer: correctAnswer,
            quizId: quizId
        }
        setQuiz(quizObj);
    }

    const totalQuiz = quizList && quizList.length;

    const handleNextQuiz = () => {
        if (quizIndex < totalQuiz - 1) {
            setQuizIndex(quizIndex + 1);
            handleQuiz(quizList[quizIndex + 1]);
        } else {
            setQuizIndex(0);
            handleQuiz(quizList[quizIndex]);
        }
    }


    console.log(quizList)

    return (
        <div className="container">
            {
                isAmount ? <MDBInput onKeyDown={event => handleSetAmount(event)} label='Example label' id='form1' type='text'/>
                    :
                    <div>
                        {/*<h1 className="text-center">{quiz.question}</h1>*/}
                        {/*<p className="text-center">{quizIndex + 1 + " / " + totalQuiz}</p>*/}
                        <div className="d-flex flex-column mb-3 border p-2 rounded-3">
                            {
                                Object.keys(quizList) > 0 && quiz.answers.map((answer, index) => {
                                    return (
                                        // <QuizButton
                                        //     key={index}
                                        //     handleNextQuiz={handleNextQuiz}
                                        //     title={answer}
                                        // />
                                        <h1>{answer}</h1>
                                    )
                                })
                            }
                        </div>
                    </div>

            }

        </div>
    );
}

export default QuizScreen;
