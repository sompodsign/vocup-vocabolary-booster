import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import '../styles/base.css'
import {tabTitle} from "../utils/generalFunctions";
import {QuizButton} from "../components/buttons";
import {submitQuizAnswer} from "../redux/actions/quizActions";
import {MDBInput} from "mdbreact";
import {retrieveQuizRangeList} from "../redux/actions/quizActions";
import Modal from "../components/modal";

import {QUIZ_ANSWER_SUBMIT_RESET} from "../redux/constants/quizConstants";


function QuizScreen() {

    tabTitle('QUIZ - VOCUP');

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const quizzes = useSelector(state => state.quizRange);
    const userLogin = useSelector(state => state.userLogin)
    const quizAnswerResponse = useSelector(state => state.quizSubmit)
    const {userInfo} = userLogin;
    const {quizRangeList: quizList} = quizzes;
    const {answerResponse: response, loading: answerLoading} = quizAnswerResponse

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
    console.log(quizIndex)

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


console.log(answers)
let toggleModal = () => {
    setIsScore(!isScore)
    setAnswers([]);
    setQuizIndex(0);
    dispatch({type: QUIZ_ANSWER_SUBMIT_RESET})

}
return (
    <div className="container">

        {isAmount ?
            <MDBInput onKeyDown={event => handleSetAmount(event)} label='Example label' id='form1' type='text'/>
            :
            !isScore ?
                <div>
                    {quizList && <h1>{quizList[quizIndex].question}</h1>}
                    {quizList && quizList[quizIndex].answers.map((answer, index) => {
                        return (
                            <div key={index}>
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
                :
                <Modal isScore={isScore} answeredAnswers={answers} toggleIsScore={toggleModal}/>
        }

    </div>
);
}

export default QuizScreen;
