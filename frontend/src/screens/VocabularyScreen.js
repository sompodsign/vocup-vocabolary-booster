
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/base.css'
import { listWords } from '../redux/actions/wordActions';
import {tabTitle} from "../utils/generalFunctions";
import Table from "../components/table";
import Input from "../components/input";
import {PrimaryResBtn} from "../components/buttons";

function VocabularyScreen() {

  tabTitle('Vocabulary - VOCUP');

  const [inputValue, setInputValue] = useState(null);

  const dispatch = useDispatch();
  const wordList = useSelector(state => state.wordList);
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin;
  let { words } = wordList;

  let navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      dispatch(listWords());
    } else {
      navigate('/login')
    }
}, [dispatch, navigate, userInfo])

  words = inputValue !== null ? words.filter(word => word.word.toLowerCase().includes(inputValue.toLowerCase())) : words;

  return (
      <div>
        <PrimaryResBtn onClick={() => navigate('/vocabulary/quiz')} title="Take a quiz?"/>
        <Input  func={setInputValue} variant="outline-success" label="English Word"/>
            <Table words={words}/>
      </div>
  );
}
export default VocabularyScreen;
