// noinspection ES6CheckImport,JSStringConcatenationToES6Template

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/base.css'
import { listWords } from '../redux/actions/wordActions';
import {tabTitle} from "../utils/generalFunctions";


function VocabularyScreen() {

  tabTitle('Vocabulary - VOCUP');


  const dispatch = useDispatch();
  const wordList = useSelector(state => state.wordList);
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const { loading, words, error } = wordList

  let navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      dispatch(listWords());
    } else {
      navigate('/login')
    }
}, [dispatch, navigate, userInfo])

  return (
    <div>
      {words.map(word => (
      <h3 key={word.id}>{word.word} - {word.meaning}</h3>
      ))}

    </div>
  );
}
export default VocabularyScreen;
