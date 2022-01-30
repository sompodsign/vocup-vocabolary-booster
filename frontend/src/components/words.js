
import {useEffect, useState } from 'react';
import client from '../config';
import '../styles/base.css'

function Words() {

  const [words, setWords] = useState([]);


  useEffect(() => {
  client.get('words/').then(res => {
    setWords(res.data);
  }).catch(err => {console.log(err)});
}, []);

  return (
    <div class="md:container md:mx-auto">
      {words.map(word => (
      <h3 key={word.id}>{word.word} - {word.meaning}</h3>
      ))}
      
    </div>
  );
}
export default Words;