import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import '../styles/base.css'
import {createWord, listWords} from '../redux/actions/wordActions';
import {tabTitle} from "../utils/generalFunctions";
import Table from "../components/table";
import Input from "../components/input";
import {TakeAQuizBtn} from "../components/buttons";

import {MDBInput} from "mdb-react-ui-kit";

function VocabularyScreen() {

    tabTitle('Vocabulary - VOCUP');

    const [inputValue, setInputValue] = useState(null);

    const [newWord, setNewWord] = useState("")
    const [newMeaning, setNewMeaning] = useState("")

    const dispatch = useDispatch();
    const wordList = useSelector(state => state.wordList);
    const userLogin = useSelector(state => state.userLogin)
    const newSavedWord = useSelector(state => state.createdWord)
    const {userInfo} = userLogin;
    let {words} = wordList;
    let {createdWord} = newSavedWord

    let navigate = useNavigate();


    const handleSave = () => {
        dispatch(createWord({"word": newWord, "meaning": newMeaning}))
        setNewWord("");
        setNewMeaning("");
    }

    useEffect(() => {
        if (userInfo) {
            dispatch(listWords());
        } else {
            navigate('/login')
        }
    }, [dispatch, navigate, userInfo, createdWord])

    words = inputValue !== null ? words.filter(word => word.word.toLowerCase().includes(inputValue.toLowerCase())) : words;

    return (
        <div>
            <div className="d-lg-flex justify-content-lg-between">
                <div className="justify-content-lg-start">
                    <TakeAQuizBtn onClick={() => navigate('/vocabulary/quiz')} title="Take a quiz?"/>
                </div>
                <div className="d-lg-flex justify-content-lg-end">

                    <MDBInput
                        onChange={e => setNewWord(e.target.value)}
                        value={newWord}
                        id="form1"
                        label="Enter Word"
                        type='text'/>

                    <MDBInput
                        onChange={e => setNewMeaning(e.target.value)}
                        value={newMeaning}
                        id="form1"
                        label="Enter Meaning"
                        className="mb-lg-0 mb-sm-3 mb-md-0 mt-sm-2 mt-lg-0"
                        type='text'/>


                    <div className="ml-3 d-sm-flex justify-content-sm-end">
                        <TakeAQuizBtn title="Save" onClick={handleSave}/>
                    </div>

                </div>
            </div>
            <Input func={setInputValue} variant="outline-success" label="English Word"/>
            <Table words={words}/>
        </div>
    );
}

export default VocabularyScreen;
