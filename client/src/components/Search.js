import React from 'react';
import './Search.css'
import SearchBar from './SearchBar'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Paper, AppBar, TextField, Button } from '@mui/material';
//import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
//import clubData from './clubPage.json';
// function useQuery(){
//   return new URLSearchParams(useLocation().search);
// }
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
        <SearchBar swap = {props.swap} data={clubData}/>
        </div>

    </div>
  );
}

export default Search