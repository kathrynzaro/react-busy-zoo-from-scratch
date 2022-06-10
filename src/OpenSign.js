import React from 'react';

export default function OpenSign({ festivalOpen }) {
  return (
    <div className={festivalOpen ? 'open' : 'closed'}>
      {
        festivalOpen
          ? <h1>Welcome to the spooky festival!</h1>
          : <h3>the spooky festival will be open annually october 1st  - 31st</h3>
      }
    </div>
  );
}
