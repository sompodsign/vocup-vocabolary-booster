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
import {WORD_CREATE_FAIL, WORD_CREATE_RESET} from "../redux/constants/wordConstants";
import { FlagIcon } from '@heroicons/react/solid';
import Pagination from "../components/pagination";

function VocabularyScreen() {

    tabTitle('Vocabulary - VOCUP');

    const [inputValue, setInputValue] = useState("");

    const [newWord, setNewWord] = useState("")
    const [newMeaning, setNewMeaning] = useState("")
    const [offset, setOfset] = useState(0)
    const [limit, setLimit] = useState(100)


    const dispatch = useDispatch();
    const wordList = useSelector(state => state.wordList);
    const userLogin = useSelector(state => state.userLogin)
    const newSavedWord = useSelector(state => state.createdWord)
    const {createdWord, loading:wordCreateLoading, error:wordCreateError,fail, success:wordCreateSuccess} = newSavedWord


    const {userInfo} = userLogin;
    let {loading: wordListLoading, words} = wordList;

    let navigate = useNavigate();



    const handleSave = () => {
        dispatch(createWord({"word": newWord, "meaning": newMeaning}))
        setNewWord("");
        setNewMeaning("");
    }

    useEffect(() => {
        if (userInfo) {
            dispatch(listWords(limit, offset, inputValue));
        } else {
            navigate('/login')
        }
    }, [dispatch, createdWord, userInfo, navigate, offset, inputValue])

    useEffect(()=> {
        dispatch({type: WORD_CREATE_RESET});
    }, [])

    const handlePagination = (pageNum) => {
        console.log(pageNum)
        setOfset(pageNum * limit)
    }

    const totalWords = words.count && words.count
    const totalPages = totalWords ? Math.ceil(totalWords / limit) : 0

    //math round in js
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round

// console.log(totalPages)
    // words = inputValue !== null ? words.results.filter(word => word.word.toLowerCase().includes(inputValue.toLowerCase())) : words;

    if (wordCreateSuccess) {
        notify("Word saved successfully", "success" )
        dispatch(listWords());
        dispatch({type: WORD_CREATE_RESET})
    } else if (wordCreateError) {
        notify(wordCreateError.data.data.error, "error" )
        dispatch({type: WORD_CREATE_RESET})
    }



    return (
        <div className="h-full min-h-screen bg-slate-300 position-relative">
        <div className="container pt-4">
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
                            autoComplete="off"
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
    <svg role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            {/*<p className="m-0 p-0 text-right">{words.count}</p>*/}
            {wordListLoading ?
                // <>
                //     <div className="lg:hidden"><MyBulletListLoader/></div>
                //     <div className="lg:block hidden"><MyLoader/></div>
                // </>
                <div className="mx-auto text-center">
                <svg role="status"
                     className="inline mr-2 w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400"
                     viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"/>
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"/>
                </svg>
                </div>
                :
                <Table words={words.results}/>
            }

        {/*<Pagination />*/}

            { words.count > 100 &&
            <nav className="text-center mt-2">
                <ul className="inline-flex -space-x-px">
                    <li>
                        <a href="#"
                           className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                    </li>
                    {
                        Array.from(Array(totalPages).keys()).map((pageNum, index) => {
                            return (
                                <li onClick={()=>handlePagination(pageNum)}>
                                    <a href="#"
                                       className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{pageNum + 1}</a>
                                </li>
                            )
                        })

                    }

                    <li>
                        <a href="#"
                           className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                    </li>
                </ul>
            </nav>
            }


        </div>
        </div>
    );
}

export default VocabularyScreen;
