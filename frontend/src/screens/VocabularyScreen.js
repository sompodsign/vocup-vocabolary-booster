import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import {createWord, listWords} from '../redux/actions/wordActions';
import {tabTitle} from "../utils/generalFunctions";
import Table from "../components/table";
import Input from "../components/input";
import {SaveButton, TakeAQuizBtn} from "../components/buttons";

import {MDBBtn, MDBIcon, MDBInput} from "mdb-react-ui-kit";
import ContentLoader, {BulletList, Facebook, List} from "react-content-loader";

import '../styles/base.css'
import {Button, Spinner} from "react-bootstrap";
import {WORD_CREATE_RESET} from "../redux/constants/wordConstants";

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
    let {loading: wordListLoading, words} = wordList;
    let {createdWord, loading:wordCreateLoading, error:wordCreateError, success:wordCreateSuccess} = newSavedWord

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

    setTimeout(() => {
        if (wordCreateSuccess) {
            dispatch({type: WORD_CREATE_RESET})
        }
    }, 2000)

    console.log(wordCreateError && wordCreateError.payload.data.data.word[0])
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
                            type='text'/>
                    </div>


                    <div className="mt-2 mt-lg-0 mx-lg-2">
                        <MDBInput
                            autocomplete="off"
                            onChange={e => setNewMeaning(e.target.value)}
                            value={newMeaning}
                            id="form1"
                            label="Enter Meaning"
                            className="mb-lg-0 mb-sm-3 mb-md-0 mt-sm-2 mt-lg-0"
                            type='text'/>
                    </div>

                    <div className=" mt-2 mb-2 mb-lg-0 mt-lg-0">
                        {/*<SaveButton title="Save" onClick={handleSave}/>*/}
                        <div>
                            <Button
                                variant={wordCreateSuccess ? "success" : wordCreateError ? "danger" : "primary"}
                                onClick={handleSave}
                            >
                                {wordCreateLoading ? <Spinner
                                    className="mr-2"
                                    size="sm"
                                    as="span"
                                    animation="grow"
                                    role="status"
                                    aria-hidden="true"
                                /> : wordCreateSuccess ? <MDBIcon className="mr-2" icon="check" />: null}
                                {
                                    wordCreateLoading ? "Saving" : wordCreateError ? "Error" : wordCreateSuccess ? "Success" : "Save"
                                }
                            </Button>
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
