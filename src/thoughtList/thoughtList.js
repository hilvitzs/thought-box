import React from 'react';
import { ThoughtCard } from '../thoughtCard/thoughtCard';

export const ThoughtList = ({ thoughts }) => {
  const thoughtArray = thoughts.map( thought => <ThoughtCard { ...thoughts } />)
  return (
    <div className='thoughtList'>
    {thoughtArray}
    </div>
  );
}
