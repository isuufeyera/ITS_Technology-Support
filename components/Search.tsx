import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'; // use 24, not 16

const Search = () => {
  const [showInput, setShowInput] = useState(false);

  return (
    <div className='flex items-center space-x-2 bg-white p-2 rounded'>
      <button onClick={() => setShowInput(!showInput)}>
        <MagnifyingGlassIcon className='w-5 h-5 text-gray-600' />
      </button>

      {showInput && (
        <input
          type='text'
          placeholder='Search...'
          className='px-2 py-1 rounded border border-gray-300 text-sm outline-none'
          autoFocus
        />
      )}
    </div>
  );
};

export default Search;
