import React from 'react';
import { range } from '../../utils';

function Guess({guessList, row}) {
  const cellRangeArr = range(5);
  let word = "";
  if (guessList[row]) {
    word = guessList[row].value;
  }

  return (
    <p className="guess">
     {cellRangeArr.map((cell) => {
      return <span className="cell" key={cell}>{word == "" ? "" : word.charAt(cell)}</span>
     })}
    </p>
  );
}

export default Guess;
