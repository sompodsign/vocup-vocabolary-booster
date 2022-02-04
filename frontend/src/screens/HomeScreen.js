import {tabTitle} from "../utils/generalFunctions";
import QuizCard from "../components/quizCard";
import {useEffect, useState} from "react";
import {listWords} from "../redux/actions/wordActions";
import {useDispatch, useSelector} from "react-redux";
// import {useNavigate} from "react-router-dom";


function HomeScreen() {
    tabTitle("Home - VOCUP");

    const dispatch = useDispatch();
    const wordList = useSelector(state => state.wordList);
    // const userLogin = useSelector(state => state.userLogin)
    // const { userInfo } = userLogin
    const { words } = wordList

    const [questionBank, setQuestionBank] = useState([]);

    // let navigate = useNavigate();

    useEffect(() => {
        dispatch(listWords());
    }, []);

    const questionBankGenerator = () => {
        let questions = [];
        for (let i = 0; i < words.length; i++) {
            const question = {
                question: words[i].word,
                correctAnswer: words[i].meaning,
                options: [],
                id: words[i].id
            }
            for (let j = 0; j < 3; j++) {
                let randomIndex = Math.floor(Math.random() * words.length);
                if (randomIndex !== i) {
                    question.options.push(words[randomIndex].meaning);
                }
            }
            questions.push(question);
        }
        console.log(questions);
        setQuestionBank(questions);
    }
    useEffect(() => {
        questionBankGenerator();
    }, [words]);



    return (
        questionBank.map(question => <QuizCard props={question}/>
        )
    )
}

export default HomeScreen;
