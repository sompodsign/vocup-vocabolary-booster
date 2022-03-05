import {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {tabTitle} from "../utils/generalFunctions";
import Input from "../components/input";
import CustomBtn from "../components/button"
import {retrieveDictWord} from "../redux/actions/dictionaryActions";
import {DICTIONARY_WORD_RESET} from "../redux/constants/dictionaryConstants";
import Spinner from "../components/spinner";
import ResultCard from "../components/resultCard";
import notify from "../utils/notification";
import {Buttons, PrimaryBtn} from "../components/buttons";
import {createWord} from "../redux/actions/wordActions";
import {capitalize} from "../helpers/capitalize";
import ContentLoader, {BulletList, Facebook, List} from "react-content-loader";
import {Link} from "react-router-dom";
import {MDBBtn} from "mdb-react-ui-kit";
import {WORD_CREATE_RESET} from "../redux/constants/wordConstants";
import {MDBIcon} from "mdbreact";


function DictionaryScreen() {

    tabTitle('Dictionary - VOCUP');

    const [inputValue, setInputValue] = useState('')
    const [addWord, setAddWord] = useState(false);
    const firstUpdate = useRef(true);
    const inputRef = useRef(null);

    const newSavedWord = useSelector(state => state.createdWord)
    let {createdWord, loading: wordCreateLoading, error: wordCreateError, success: wordCreateSuccess} = newSavedWord


    const dispatch = useDispatch();

    const dictObj = useSelector(state => state.dictWord);
    const {dictWordMeaning: word, error, loading} = dictObj

    useEffect(() => {
        dispatch({type: WORD_CREATE_RESET});
        dispatch({type: DICTIONARY_WORD_RESET});
    }, [])


    const MyLoader = () => (
        <ContentLoader viewBox="0 0 380 120">
            {/* Only SVG shapes */}
            <rect x="0" y="15" rx="5" ry="5" width="130" height="200"/>
        </ContentLoader>
    )

    const MyListLoader = () => <List/>


    const handleSearch = () => {
        /* it will dispatch word fetching action */
        dispatch(retrieveDictWord(inputValue)).then(() => {
            setInputValue('');
        });
    }

    const handleAddWordState = (addWordState, isBnSyn = null) => {
        isBnSyn != null && isBnSyn === false ? dispatch(createWord({word: capitalize(word.en), meaning: word.bn})
            )
            : setAddWord(addWordState)
    }

    const handleAddWord = (meaning) => {
        dispatch(createWord({word: capitalize(word.en), meaning: meaning}));

    }

    setTimeout(() => {
        if (wordCreateSuccess) {
            dispatch({type: WORD_CREATE_RESET});
        }
    }, 2000)


    return (
        <div className="container">

            <Link to="/vocabulary">
                <div className="lg:hidden flex justify-content-end">
                    <MDBBtn
                        className="mb-lg-0 mb-sm-3 mb-2"
                        outline
                        rounded>
                        Vocabulary
                    </MDBBtn>
                </div>
            </Link>

            <Input reference={inputRef} func={setInputValue} value={inputValue} variant="outline-success"
                   search={handleSearch} label="English Word"/>
            <div class="d-flex .justify-content-evenly">
                <div>
                    <PrimaryBtn key="dict" inputData={inputValue} onClick={handleSearch} title="Search"/>
                    {!error && Object.keys(word).length > 0 &&
                        <ResultCard word={word} setWordState={handleAddWordState}/>}
                </div>
                {addWord && Object.keys(word).length > 0 && word.bn_syn.length > 0 &&
                    <div class="m-lg-5 ml-3">

                        <h2>Which meaning is more comprehensive to you?</h2>
                        {wordCreateLoading &&
                            <div className="spinner-grow text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        }
                        {wordCreateSuccess && <p><MDBIcon icon="check"/></p>}
                        {!error && Object.keys(word).length > 0 && word.bn_syn.map((item, index) =>
                            <MDBBtn rounded className='text-dark m-1' color='light' key={index}
                                    onClick={() => handleAddWord(item)}>{item}</MDBBtn>
                        )}
                    </div>}
            </div>
            <div className="hidden lg:block">{loading && <MyLoader/>}</div>
            <div className="lg:hidden mt-8">{loading && <MyListLoader/>}</div>
        </div>
    );
}

export default DictionaryScreen;
