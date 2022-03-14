import React from 'react'
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = ()=> {
  return (
    <div className='search'>
        <div className='searchInputs'>
            <input type="text" placeholder='Search...'/>
            <button type='submit'><SearchIcon/></button>

        </div>

    </div>
  )
}

export default SearchBar;