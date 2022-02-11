
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/base.css'
import { listWords } from '../redux/actions/wordActions';
import {tabTitle} from "../utils/generalFunctions";
import Table from "../components/table";
import Input from "../components/input";
import {PrimaryResBtn, QuizButton} from "../components/buttons";
import {retrieveQuizList} from "../redux/actions/quizActions";
import * as PropTypes from "prop-types";
import {MDBContainer} from "mdbreact";
import Quiz from "../components/quizComponent";




function QuizScreen() {

  tabTitle('QUIZ - VOCUP');

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const quizzes = useSelector(state => state.quizList);
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin;
  const { quizList } = quizzes;


  const [quiz, setQuiz] = useState({});
  const [quizIndex, setQuizIndex] = useState(0);

  useEffect(() => {
    if (userInfo) {
      dispatch(retrieveQuizList());
    } else {
      navigate('/login')
    }
  }, [dispatch, navigate, userInfo])


  const handleQuiz = (quiz) => {
    let question = quiz.question;
    let answers = [quiz.op1, quiz.op2, quiz.op3, quiz.correct_answer];
    let correctAnswer = quiz.correct_answer;
    let randomizeQuizAnswers = answers.sort(() => Math.random() - 0.5);
    let quizObj = {
      question: question[0].toUpperCase() + question.slice(1,),
      answers: randomizeQuizAnswers,
      correctAnswer: correctAnswer
    };
    setQuiz(quizObj);
  }

  const handleNextQuiz = (correctAnswer) => {

    if (quiz.correctAnswer === correctAnswer && quizIndex < quizList.length - 1) {
      setQuizIndex(quizIndex + 1);
    }
  }

  useEffect(() => {
    quizList && quizList.sort(() => Math.random() - 0.5);
    quizList && quizList.length > 0 && handleQuiz(quizList[quizIndex]);
  }, [quizIndex, quizList])

  let totalQuiz = quizList && quizList.length;


  return (
    <div className="container">
      <div>
        <h6 className="text-center">{quiz.question}</h6>
        <p className="text-center">{quizIndex+1 + " / " + totalQuiz}</p>
        <div className="d-flex flex-column mb-3 border p-2 rounded-3">
          {quiz.answers && quiz.answers.map((answer, index) => (
            <QuizButton
              key={index}
              title={answer}
              handleNextQuiz={handleNextQuiz}
              correctAnswer={quiz.correctAnswer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default QuizScreen;
