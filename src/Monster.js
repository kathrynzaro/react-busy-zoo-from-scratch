import React from 'react';

export default function Monster({ monster }) {
  return (
    <div className='monster'>
      {monster === 'vampire' && <img className='vampire-img' src='/vampire.png' />}
      {monster === 'witch' && <img className='witch-img' src='/witch.png' />}
      {monster === 'frankenstein' && <img className='monster-img' src='/frankenstein.png' />}
      {monster === 'ghost' && <img className='ghost-img' src='/ghost.png' />}
    </div>
  );
}
