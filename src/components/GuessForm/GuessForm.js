import React from 'react';

function GuessForm() {
  const [guess, setGuess] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.info({guess});
    setGuess('');
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input pattern="\w{5,5}" required id="guess-input" type="text" value={guess} onChange={(event) => setGuess((event.target.value).toUpperCase())} />
    </form>
  );
}

export default GuessForm;
