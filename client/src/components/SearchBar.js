import React, { useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import ClubInfo from "./ClubInfo";
import { TextField } from "@material-ui/core";

import InputBase from "@mui/material/InputBase";
import { useNavigate, useLocation } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import './SearchBar.css'
import { Button } from "@mui/material";
import {getPage, getPageBySearch} from '../actions/search';
import { useDispatch } from 'react-redux';
import { Box } from "@mui/system";
import clubData from './clubPage.json';
import { SliderValueLabelUnstyled } from "@mui/base";


/* function useQuery(){
  return new URLSearchParams(useLocation().search);
}
 */




const SearchBar = (props)=> {
  /* const [search, setSearch] = useState("");
  const handleKeyPress = (e) => {
    if(e.keyCode == 13){
 
    }
  }
  const dispatch = useDispatch();
  const searchButton =(props)=>{
    if(search.trim()){
      dispatch(getPageBySearch({search}))
    }
    else{
     navigator('/')
    }
  }
   */


  /* return (
   

      <AppBar position="static" style={{width:"700px",borderRadius:"5px"}}>
        <TextField 
      fullWidth
      onKeyDown={handleKeyPress} 
      name="search" 
      label="   Search Club..."
      variant="standard" 
      size="small" 
      value={search} 
      onChange={(e) => setSearch(e.target.value)}
      style={{
        backgroundColor:"#66c1ca",
        borderRadius: "5px"
      }} />
      <Button onClick={searchButton} variant="contained">Search</Button>

      </AppBar>
            
  ) */

  const[filterData, setFiltData] = useState([]);
  const handleFilter =(event) =>{
    const word =event.target.value
    const newFilter = clubData.filter((value)=>{
      return value.clubName.toLowerCase().includes(word.toLowerCase());
    });
    if(word ===""){
      setFiltData([]);
    }
    else{
    setFiltData(newFilter);
  }
  }
  
  return (
    <div className='search'>
        <div className='searchInputs'>
            <Box>
            <input name="Search" type="text" placeholder='Search...' onChange={handleFilter}/>
            <button type='submit' postion ="static"><SearchIcon /></button>
            </Box>
        {filterData.length!=0&&(
          <div className="pageResult">
          {filterData.slice(0,4).map((value, key) => {
            return <a className="dataItem" href = "#" onClick={() =>{this.props.swap(value.url)}}>
              <p>{value.clubName}</p>
    
            </a>
          })}
        </div>
        )}
        </div>
    </div>
    
  )
}



export default SearchBar;