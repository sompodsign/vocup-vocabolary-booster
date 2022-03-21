import {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import {createWord, listWords} from '../redux/actions/wordActions';
import {tabTitle} from "../utils/generalFunctions";
import Table from "../components/table";
import Input from "../components/input";
import {SaveButton, TakeAQuizBtn} from "../components/buttons";

import {MDBBtn, MDBIcon, MDBInput} from "mdb-react-ui-kit";
import ContentLoader, {BulletList, Facebook, List} from "react-content-loader";
import notify from ".././utils/notification";

import '../styles/base.css'
import {Button, Spinner} from "react-bootstrap";
import {WORD_CREATE_RESET} from "../redux/constants/wordConstants";
import { FlagIcon } from '@heroicons/react/solid';

function VocabularyScreen() {

    tabTitle('Vocabulary - VOCUP');

    const [inputValue, setInputValue] = useState(null);

    const [newWord, setNewWord] = useState("")
    const [newMeaning, setNewMeaning] = useState("")

    const [flag, setFlag] = useState(true)

    const dispatch = useDispatch();
    const wordList = useSelector(state => state.wordList);
    const userLogin = useSelector(state => state.userLogin)
    const newSavedWord = useSelector(state => state.createdWord)
    const {createdWord, loading:wordCreateLoading, error:wordCreateError,fail, success:wordCreateSuccess} = newSavedWord


    const {userInfo} = userLogin;
    let {loading: wordListLoading, words} = wordList;

    let navigate = useNavigate();

    const MyLoader = () => (
        <ContentLoader viewBox="0 0 380 70">
            {/* Only SVG shapes */}
            {/*<rect x="0" y="0" rx="5" ry="5" width="70" height="70" />*/}
            {/*<rect x="80" y="17" rx="4" ry="4" width="300" height="13" />*/}
            <rect x="0" y="20" rx="3" ry="3" width="450" height="10"/>
            <rect x="0" y="40" rx="3" ry="3" width="450" height="10"/>
            <rect x="0" y="60" rx="3" ry="3" width="450" height="10"/>
            <rect x="0" y="80" rx="3" ry="3" width="450" height="10"/>
        </ContentLoader>
    )

    const MyBulletListLoader = () => <BulletList/>


    const handleSave = () => {
        dispatch(createWord({"word": newWord, "meaning": newMeaning})).then(() => {
            console.log(wordCreateSuccess);
            console.log(fail)
            if (flag && wordCreateSuccess) {
                notify("Word saved successfully", "success")
                // dispatch({type: WORD_CREATE_RESET})
                setFlag(false)
            }
        })

        setNewWord("");
        setNewMeaning("");
    }

    useEffect(() => {
        if (userInfo) {
            dispatch(listWords());
        } else {
            navigate('/login')
        }
    }, [dispatch, createdWord, userInfo, navigate])


    words = inputValue !== null ? words.filter(word => word.word.toLowerCase().includes(inputValue.toLowerCase())) : words;

// console.log(wordCreateSuccess);
// console.log(wordCreateError);

    return (
        <div className="container">
            <div className="d-lg-flex justify-content-lg-between">

                <div className="flex justify-between">
                    <TakeAQuizBtn onClick={() => navigate('/vocabulary/quiz')} title="Take a quiz?"/>

                    <div className="lg:hidden">
                    <Link to="/dictionary">
                        <MDBBtn
                            className="mb-lg-0 mb-sm-3 mb-md-0"
                            outline
                            rounded>
                            Dictionary
                        </MDBBtn>
                    </Link>
                    </div>

                </div>

                <div className="d-lg-flex justify-content-lg-end">

                    <div className="me-lg-2 mt-2 mt-lg-0">
                        <MDBInput
                            autoComplete="off"
                            onChange={e => setNewWord(e.target.value)}
                            value={newWord}
                            id="form1"
                            label="Enter Word"
                            required
                            type='text'/>
                    </div>


                    <div className="mt-2 mt-lg-0 mx-lg-2">
                        <MDBInput
                            autocomplete="off"
                            onChange={e => setNewMeaning(e.target.value)}
                            value={newMeaning}
                            id="form1"
                            label="Enter Meaning"
                            required
                            className="mb-lg-0 mb-sm-3 mb-md-0 mt-sm-2 mt-lg-0"
                            type='text'/>
                    </div>

                    <div className=" mt-2 mb-2 mb-lg-0 mt-lg-0">
                        <div>

<button onClick={handleSave} disabled={(!newWord.length || !newMeaning.length) && true} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
    {wordCreateLoading &&
    <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    </svg>}
    {wordCreateLoading ? "Saving..." : "Save"}
</button>

                        </div>
                    </div>
                </div>
            </div>
            <Input func={setInputValue} variant="outline-success" label="Search"/>
            {wordListLoading ?
                <>
                    <div className="lg:hidden"><MyBulletListLoader/></div>
                    <div className="lg:block hidden"><MyLoader/></div>
                </>
                :
                <Table words={words}/>
            }
        </div>
    );
}

export default VocabularyScreen;
