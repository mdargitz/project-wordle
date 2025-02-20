import React from 'react';

function GuessList({guessList}) {
  return (
    <div className="guess-results">
      {guessList.map(({value, id}) => {
        return <p className="guess" key={id}>{value}</p>
      })}
    </div>
  );
}

export default GuessList;
