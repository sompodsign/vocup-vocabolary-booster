import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {tabTitle} from "../utils/generalFunctions";
import DictInput from "../components/dictInput";
import CustomBtn from "../components/button"
import {retrieveDictWord} from "../redux/actions/dictionaryActions";
import {DICTIONARY_WORD_RESET} from "../redux/constants/dictionaryConstants";


function DictionaryScreen() {

    tabTitle('Dictionary - VOCUP');

    useEffect(() => {
        dispatch({type: DICTIONARY_WORD_RESET})
    },[])

    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch();

    const dictObj = useSelector(state => state.dictWord);
    const {dictWordMeaning: word, error} = dictObj

    const handleSearch = () => {
        /* it will dispatch word fetching action */
        dispatch(retrieveDictWord(inputValue));
    }

    return (
        <>
            <DictInput func={setInputValue} value={inputValue} variant="outline-success"/>
            <CustomBtn func={handleSearch} title="Search"/>
            <h1>{error && "NOT FOUND"}</h1>
            <h1>{!error && word.bn}</h1>
        </>
    );
}

export default DictionaryScreen;
