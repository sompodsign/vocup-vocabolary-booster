import {useEffect, useState} from 'react';
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

    useEffect(() => {
        dispatch({type: DICTIONARY_WORD_RESET})
    },[])


    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch();

    const dictObj = useSelector(state => state.dictWord);
    const {dictWordMeaning: word, error, loading} = dictObj

    const handleSearch = () => {
        /* it will dispatch word fetching action */
        dispatch(retrieveDictWord(inputValue));
    }
    console.log(word)
    return (
        <>
            <DictInput func={setInputValue} value={inputValue} variant="outline-success" search={handleSearch} />
            <CustomBtn inputData={inputValue} func={handleSearch} title="Search"/>
            <h1>{error && "NOT FOUND"}</h1>
            {loading && <Spinner />}
            {!error && Object.keys(word).length > 0 && <ResultCard word={word} />}
        </>
    );
}

export default DictionaryScreen;
