import React from 'react';
import { range } from '../../utils';

function Guess({word}) {
  const cellRangeArr = range(5);

  return (
    <p className="guess">
     {cellRangeArr.map((cell) => {
      return <span className="cell" key={cell}>{word == "" ? "" : word.charAt(cell)}</span>
     })}
    </p>
  );
}

export default Guess;
