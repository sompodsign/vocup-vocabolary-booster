import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import '../styles/base.css'
import {createWord, listWords} from '../redux/actions/wordActions';
import {tabTitle} from "../utils/generalFunctions";
import Table from "../components/table";
import Input from "../components/input";
import {SaveButton, TakeAQuizBtn} from "../components/buttons";

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

                    <div className="me-lg-2 mt-2 mt-lg-0">
                    <MDBInput
                        onChange={e => setNewWord(e.target.value)}
                        value={newWord}
                        id="form1"
                        label="Enter Word"
                        type='text'/>
                    </div>


                    <div className="mt-2 mt-lg-0 mx-lg-2">
                    <MDBInput
                        onChange={e => setNewMeaning(e.target.value)}
                        value={newMeaning}
                        id="form1"
                        label="Enter Meaning"
                        className="mb-lg-0 mb-sm-3 mb-md-0 mt-sm-2 mt-lg-0"
                        type='text'/>
                    </div>

                    <div className=" mt-2 mb-2 mb-lg-0 mt-lg-0">
                        <SaveButton title="Save" onClick={handleSave}/>
                    </div>
                </div>
            </div>
            <Input func={setInputValue} variant="outline-success" label="Search"/>
            <Table words={words}/>
        </div>
    );
}

export default VocabularyScreen;
