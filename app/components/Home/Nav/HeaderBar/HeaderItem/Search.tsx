import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

const Search: React.FC = () => {
  return (
    <div
      className="chan-search 
      max-w-sm
      border-solid border-2  
      flex 
      absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
    >
      <input className='max-w-38' type="search" placeholder="Search..."></input>
      <Icon icon="pixelarticons:search" width="36" height="36"></Icon>
    </div>
  );
};

export default Search;
