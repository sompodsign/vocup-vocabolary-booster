import {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {tabTitle} from "../utils/generalFunctions";
import DictInput from "../components/dictInput";
import CustomBtn from "../components/button"
import {retrieveDictWord} from "../redux/actions/dictionaryActions";
import {DICTIONARY_WORD_RESET} from "../redux/constants/dictionaryConstants";
import Spinner from "../components/spinner";
import ResultCard from "../components/resultCard";
import notify from "../utils/notification";
import {LightBtn, PrimaryBtn} from "../components/lightBtn";
import {createWord} from "../redux/actions/wordActions";


function DictionaryScreen() {

    tabTitle('Dictionary - VOCUP');

    const [inputValue, setInputValue] = useState('')
    const [addWord, setAddWord] = useState(false);
    const firstUpdate = useRef(true);
    const inputRef = useRef(null);


    // useEffect(() => {
    //     inputRef.current.focus();
    //     dispatch({type: DICTIONARY_WORD_RESET})
    // },[])

    const dispatch = useDispatch();

    const dictObj = useSelector(state => state.dictWord);
    const {dictWordMeaning: word, error, loading} = dictObj

    const handleSearch = () => {
        /* it will dispatch word fetching action */
            dispatch(retrieveDictWord(inputValue));
    }

    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
        } else {
            if (error) {
                notify('Word not found', 'error')
            }
        }
    });

    const handleAddWordState = (addWordState) => {
        setAddWord(addWordState)
    }

    const handleAddWord = (meaning) => {
        dispatch(createWord({word: word.en, meaning: meaning}));
    }

    // console.log(word)
    // console.log(error)
    return (
        <>
        <DictInput reference={inputRef} func={setInputValue} value={inputValue} variant="outline-success" search={handleSearch} />
        <div class="d-flex .justify-content-evenly">
            <div>
            <PrimaryBtn key="dict" inputData={inputValue} onClick={handleSearch} title="Search"/>
            {loading && <Spinner />}
            {!error && Object.keys(word).length > 0 && <ResultCard word={word} setWordState={handleAddWordState}/>}
            </div>
            {addWord &&
                <div class="m-lg-5">
                    <h2>Which meaning is more comprehensive to you?</h2>
                    {!error && Object.keys(word).length > 0 && word.bn_syn.map((item, index) =>
                        <LightBtn key={index} text={item} func={handleAddWord}/>
                    )}
                </div>}
        </div>
        </>
    );
}

export default DictionaryScreen;
