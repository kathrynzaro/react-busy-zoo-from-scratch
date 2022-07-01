import React from 'react';

export default function OpenSign({ festivalOpen }) {
  return (
    <div className={festivalOpen ? 'open' : 'closed'}>
      {
        festivalOpen
          ? <h1>the festival is open!</h1>
          : <h3>open october 1st through halloween!</h3>
      }
    </div>
  );
}
