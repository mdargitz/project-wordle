import React from 'react';

function GuessList({guessList}) {
  return (
    <div className="guess-results">
      {guessList.map((guess) => {
        return <p className="guess" key={guess.id}>{guess.value}</p>
      })}
    </div>
  );
}

export default GuessList;
