// noinspection ES6CheckImport,JSStringConcatenationToES6Template

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/base.css'
import { listWords } from '../redux/actions/wordActions';
import {tabTitle} from "../utils/generalFunctions";
import CustomCard from "./wordCard";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Table from "./table";

function VocabularyScreen() {

  tabTitle('Vocabulary - VOCUP');


  const dispatch = useDispatch();
  const wordList = useSelector(state => state.wordList);
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin;
  const { loading, words, error } = wordList;


  let navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      dispatch(listWords());
    } else {
      navigate('/login')
    }
}, [dispatch, navigate, userInfo])


  return (
            <Table words={words}/>


  );
}
export default VocabularyScreen;
