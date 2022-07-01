import React from 'react';

export default function Monster({ monster }) {
  return (
    <div className='monster'>
      {monster === 'vampire' && <img className='vampire-img' src='/vampire.png' alt='vampire' />}
      {monster === 'witch' && <img className='witch-img' src='/witch.png' alt='witch' />}
      {monster === 'frankenstein' && <img className='monster-img' src='/frankenstein.png' alt='frankenstein' />}
      {monster === 'ghost' && <img className='ghost-img' src='/ghost.png' alt='ghost' />}
    </div>
  );
}
