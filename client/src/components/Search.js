import React from 'react';
import './Search.css'
import SearchBar from './SearchBar'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Paper, AppBar, TextField, Button } from '@mui/material';
//import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
<<<<<<< HEAD
//import clubData from './clubPage.json';
// function useQuery(){
//   return new URLSearchParams(useLocation().search);
// }
=======

>>>>>>> d4f3a5967e15b53ac7500d9531b21c1d7a7e48e0
const Search = (props) => {
  // const [search,setSearch] = useState('');
  // const query = useQuery();
  // const page = query.get('page') || 1;
  // const nav = useNavigate();
  // const searchQuery = query.get('searchQuery')
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