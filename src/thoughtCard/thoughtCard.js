import React from 'react';

export const ThoughtCard = ({ title, body }) => {
  return (
    <div className='thoughtCard'>
      <p className='title'>{title}</p>
      <p className='body'>{body}</p>
   </div>
  )
}
