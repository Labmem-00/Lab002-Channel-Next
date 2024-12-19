import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

const Search: React.FC = () => {
  return (
    <div
      className="chan-search 
      max-w-sm
      h-8
      border-solid border-2  rounded-md
      flex 
      absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
    >
      <input className='max-w-32 ld:max-w-48'  type="search" placeholder="Search..."></input>
      <div className='mx-1 pl-1 border-l-2 border-solid rounded-sm'>
        <Icon icon="pixelarticons:search" width="28" height="28"></Icon>
      </div>
      
    </div>
  );
};

export default Search;
