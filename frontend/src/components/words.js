
import {useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/base.css'
import { listWords } from '../redux/actions/wordActions';


function Words() {


  const dispatch = useDispatch();
  const wordList = useSelector(state => state.wordList);
  const { loading, words, error } = wordList

  useEffect(() => {
    if (words.length === 0) {
        dispatch(listWords())
    }
}, [])


//   const [words, setWords] = useState([]);


//   useEffect(() => {
//   client.get('words/').then(res => {
//     setWords(res.data);
//   }).catch(err => {console.log(err)});
// }, []);

  return (
    <div class="md:container md:mx-auto">
      {words.map(word => (
      <h3 key={word.id}>{word.word} - {word.meaning}</h3>
      ))}

    </div>
  );
}
export default Words;
