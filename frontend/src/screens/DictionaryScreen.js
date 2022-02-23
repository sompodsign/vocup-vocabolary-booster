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


function DictionaryScreen() {

    tabTitle('Dictionary - VOCUP');

    const [inputValue, setInputValue] = useState('')
    const [addWord, setAddWord] = useState(false);
    const firstUpdate = useRef(true);
    const inputRef = useRef(null);


    const dispatch = useDispatch();

    const dictObj = useSelector(state => state.dictWord);
    const {dictWordMeaning: word, error, loading} = dictObj


    const handleSearch = () => {
        /* it will dispatch word fetching action */
        dispatch(retrieveDictWord(inputValue));
        setAddWord(false);
    }

    const handleAddWordState = (addWordState, isBnSyn=null) => {
        isBnSyn != null && isBnSyn === false ? dispatch(createWord({word: capitalize(word.en), meaning: word.bn}))
            : setAddWord(addWordState)
    }

    const handleAddWord = (meaning) => {
        dispatch(createWord({word: capitalize(word.en), meaning: meaning}));
    }

    return (
        <>
        <Input reference={inputRef} func={setInputValue} value={inputValue} variant="outline-success" search={handleSearch} label="English Word"/>
        <div class="d-flex .justify-content-evenly">
            <div>
            <PrimaryBtn key="dict" inputData={inputValue} onClick={handleSearch} title="Search"/>
            {loading && <Spinner />}
            {!error && Object.keys(word).length > 0 && <ResultCard word={word} setWordState={handleAddWordState}/>}
            </div>
            {addWord && Object.keys(word).length > 0 && word.bn_syn.length > 0 &&
                <div class="m-lg-5 ml-3">
                    <h2>Which meaning is more comprehensive to you?</h2>
                    {!error && Object.keys(word).length > 0 && word.bn_syn.map((item, index) =>
                        <Buttons key={index} text={item} func={handleAddWord}/>
                    )}
                </div>}
        </div>
        </>
    );
}

export default DictionaryScreen;
