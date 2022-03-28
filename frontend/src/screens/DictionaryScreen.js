import {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {tabTitle} from "../utils/generalFunctions";
import Input from "../components/input";
import {retrieveDictWord} from "../redux/actions/dictionaryActions";
import {DICTIONARY_WORD_RESET} from "../redux/constants/dictionaryConstants";
import ResultCard from "../components/resultCard";
import notify from "../utils/notification";
import {createWord, listWords} from "../redux/actions/wordActions";
import {capitalize} from "../helpers/capitalize";
import ContentLoader, {List} from "react-content-loader";
import {Link} from "react-router-dom";
import {MDBBtn} from "mdb-react-ui-kit";
import {WORD_CREATE_RESET} from "../redux/constants/wordConstants";
import {MDBIcon} from "mdbreact";
import {YellowSpinner} from "../components/spinner";


function DictionaryScreen() {

    tabTitle('Dictionary - VOCUP');

    const [inputValue, setInputValue] = useState('')
    const [addWord, setAddWord] = useState(false);
    const inputRef = useRef(null);

    const newSavedWord = useSelector(state => state.createdWord)
    let {loading: wordCreateLoading, error: wordCreateError, success: wordCreateSuccess} = newSavedWord


    const dispatch = useDispatch();

    const dictObj = useSelector(state => state.dictWord);
    const {dictWordMeaning: word, error, loading} = dictObj

    useEffect(() => {
        inputRef.current.focus()
        dispatch({type: WORD_CREATE_RESET});
        dispatch({type: DICTIONARY_WORD_RESET});
    }, [])


    const handleSearch = () => {
        /* it will dispatch word fetching action */
        setAddWord(false)  //false so which meaning is comprehensive modal doesn't appear after search word.
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

    if (wordCreateSuccess) {
        notify("Word saved successfully", "success")
        dispatch(listWords());
        dispatch({type: WORD_CREATE_RESET})
    } else if (wordCreateError) {
        notify(wordCreateError.data.data.error, "error")
        dispatch({type: WORD_CREATE_RESET})
    }

    if (error && error.data) {
        notify(`"${inputValue}" ${error.data.data[0].slice(4,)}`, "info")
        dispatch({type: DICTIONARY_WORD_RESET})
    }

    if (error && !error.data) {
        notify("Something went wrong!", "error")
        dispatch({type: DICTIONARY_WORD_RESET})
    }


    return (
        <div className="h-full min-h-screen bg-slate-300">
            <div className="container pt-7">
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

                        <button onClick={handleSearch} disabled={inputValue === '' && 'disabled'} type="button"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                            {loading &&
                                <svg role="status" className="inline mr-3 w-4 h-4 text-white animate-spin"
                                     viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="#E5E7EB"/>
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentColor"/>
                                </svg>}
                            {loading ? "Searching..." : "Search"}
                        </button>


                        {word && word.id &&
                            <ResultCard word={word} setWordState={handleAddWordState}/>}
                    </div>
                    {addWord && word.bn_syn.length &&
                        <div class="m-lg-5 ml-3">

                            <h2>Which meaning is more comprehensive to you?</h2>

                            {wordCreateLoading &&
                                <div className="spinner-grow text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            }

                            {wordCreateSuccess && <p><MDBIcon icon="check"/></p>}
                            {word.bn_syn.map((item, index) =>
                                <MDBBtn rounded className='text-dark m-1' color='light' key={index}
                                        onClick={() => handleAddWord(item)}>{item}</MDBBtn>
                            )}
                        </div>}
                </div>

            </div>
        </div>
    );
}

export default DictionaryScreen;
