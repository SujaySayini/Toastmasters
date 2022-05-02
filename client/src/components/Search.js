import React from 'react';
import './Search.css'
import SearchBar from './SearchBar'
const Search = (props) => {
  return (
    <div className='page'>
      <div className='container'>
            <div className='row align-self-center'>
                <div className='searchTitle'>Search</div>
            </div>
        </div>

      <div className='bar'>
        <SearchBar swap = {props.swap}/>
        </div>

    </div>
  );
}

export default Search