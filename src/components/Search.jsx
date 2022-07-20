import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { searchByName } from '../redux/actions';

const Search = () => {
  const dispatch = useDispatch()

  const [name, setName] = useState('');


  function handleSearchName(e) {
    e.preventDefault()
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchByName(name))
    setName('')
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text"
          placeholder='Search'
          value={name}
          onChange={(e) => handleSearchName(e)}
          autoFocus />
      </form>
    </div>
  );
};

export default Search;