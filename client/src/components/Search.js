import React from 'react';
import './Search.css'
import SearchBar from './SearchBar'
import SearchIcon from '@mui/icons-material/Search';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import clubData from './clubPage.json';

const Search = () => {
  return (
    <div className='page'>
        <div className='container'>
            <div className='row align-self-center'>
                <div className='searchTitle'>Search</div>
            </div>
        </div>
                
        <div className='bar'>
        <SearchBar data={clubData}/>
        </div>

    </div>
  );
}

export default Search