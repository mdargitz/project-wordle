import React from 'react';

function GuessForm({handleAddToGuessList}) {
  const [guess, setGuess] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddToGuessList(event, {value: guess, id: crypto.randomUUID()});
    console.info({guess});
    setGuess('');
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        pattern="[a-zA-Z]{5}" 
        title="5 letter word"
        required
        id="guess-input"
        type="text" 
        value={guess}
        onChange={(event) => setGuess((event.target.value).toUpperCase())} />
    </form>
  );
}

export default GuessForm;
