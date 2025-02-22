import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessList({guessList}) {
  const rowRangeArr = range(NUM_OF_GUESSES_ALLOWED);
  return (
    <div className="guess-results">
      {rowRangeArr.map((row, index) => {
        return <Guess key={index} guessList={guessList} row={row} />
      })}
    </div>
  );
}

export default GuessList;
