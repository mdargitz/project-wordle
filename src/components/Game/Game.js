import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessForm from '../GuessForm/GuessForm';
import GuessList from '../GuessList/GuessList';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  const handleAddToGuessList = (event, guess) => {
    event.preventDefault();
    const guessResult = checkGuess(guess.value, answer);
    guess.result = guessResult;
    const newGuessList = [...guessList, guess]
    setGuessList(newGuessList);
  }
  
  return (
    <>
      <GuessList guessList={guessList} />
      <GuessForm handleAddToGuessList={handleAddToGuessList} />
    </>
  )
}

export default Game;
