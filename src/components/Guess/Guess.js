import React from 'react';
import { range } from '../../utils';

function Guess({guess}) {
  const cellRangeArr = range(5);

  return (
    <p className="guess">
     {cellRangeArr.map((cell) => {
      if (guess) {
        return <span className={"cell " + guess.result[cell].status} key={cell}>{guess.value.charAt(cell)}</span>
      } else {
        return <span className="cell" key={cell}></span>
      }
     })}
    </p>
  );
}

export default Guess;
