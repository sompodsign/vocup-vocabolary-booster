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


function DictionaryScreen() {

    tabTitle('Dictionary - VOCUP');

    const [inputValue, setInputValue] = useState('')
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

    // console.log(word)
    // console.log(error)
    return (
        <>
            <DictInput reference={inputRef} func={setInputValue} value={inputValue} variant="outline-success" search={handleSearch} />
            <CustomBtn inputData={inputValue} func={handleSearch} title="Search"/>
            {loading && <Spinner />}
            {!error && Object.keys(word).length > 0 && <ResultCard word={word} />}
        </>
    );
}

export default DictionaryScreen;
