import React from 'react';
import { useDispatch } from 'react-redux';
// import { useState } from 'react';
import { searchByPage } from './redux/actions';

const SearchPage = ({page, setPage}) => {
    const dispatch = useDispatch()
  
    // const [namePage, setNamePage] = useState (1);
    // const [error, setError] = useState('')
    
    function handleSearchPage (e) {
        e.preventDefault()
         page = e.target.value
    }
    
      function handleSubmit(e) {
        e.preventDefault();
        dispatch(searchByPage(page))
        setPage(page)
        document.getElementById('form').reset()
      }
    return (
        <div>
             <form id='form' onSubmit={(e) => handleSubmit(e)}>
            <input type="number" 
            placeholder='Search Page'
            // value={page}
            onChange={(e) =>handleSearchPage(e)}
            />
          </form>
        </div>
    );
};

export default SearchPage;