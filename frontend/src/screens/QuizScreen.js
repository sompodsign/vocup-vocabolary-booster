
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

  // const [inputValue, setInputValue] = useState(null);

  const dispatch = useDispatch();
  const quizzes = useSelector(state => state.quizList);
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin;
  const { quizList } = quizzes;

  let navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      dispatch(retrieveQuizList());
    } else {
      navigate('/login')
    }
  }, [dispatch, navigate, userInfo])
  console.log(quizList);

  const [quiz, setQuiz] = useState({});
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);

  // const totalQuiz = quizList.length;

  const handleAnswers = () => {
    let answers = [];
    quiz.questions.map((question, index) => {
      answers.push({
        questionId: question.id,
        answer: quizAnswers[index]
      })
    })
    return answers;
  }

  useEffect(() => {
    if (quizList.length > 0) {
      setQuiz({...quizList[0]});

    }

  }, [quizIndex, quizList])

  // const handleQuiz = () => {
  //   setQuizIndex(quizIndex + 1);
  // }
  console.log(quiz)
  return (
    <div className="container">
      <div>
        <h6 className="text-center">{quiz.question}</h6>
        <p className="text-center">{quizIndex}</p>
        <div className="d-flex flex-column mb-3 border p-2 rounded-3">
          <QuizButton title="Answer 1" />
          <QuizButton title="Answer 2" />
          <QuizButton title="Answer 3" />
          <QuizButton title="Answer 4" />
        </div>
      </div>
    </div>
  );
}
export default QuizScreen;
