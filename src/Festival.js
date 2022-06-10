import React from 'react';
import Monster from './Monster';

export default function Festival({ monsters }) {
  return (
    <div className='festival'>
      {
        monsters.map((monster, i) => <Monster monster={monster} key={monster + i} />)
      }  
    </div>
  );
}
