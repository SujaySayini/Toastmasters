import React, { useEffect, useState } from "react";
import { getClubs } from "../actions/clubpage.js";
import SearchIcon from "@mui/icons-material/Search";
import './SearchBar.css'
import { Box } from "@mui/system";

const SearchBar = (props)=> {
  const [filterData, setFiltData] = useState([]);
  const updateClubs = async () =>{
    const clubData2 = await getClubs();
    const clubData = []
    for(let i = 0; i < clubData2.length; i++){
      if(clubData2[i].clubName){
        clubData.push(clubData2[i])
      }
    }    
    setFiltData(clubData.filter((value)=>{return value.clubName.toLowerCase()}));
  }

  useEffect(()=>{
      updateClubs();
  }, []);

  const handleFilter = async (event) => {
    const word = event.target.value

    const clubData2 = await getClubs();
    const clubData = []
    for(let i = 0; i < clubData2.length; i++){
      if(clubData2[i].clubName){
        clubData.push(clubData2[i])
      }
    } 
    const newFilter = clubData.filter((value)=>{
      return value.clubName.toLowerCase().includes(word.toLowerCase());
    });
      if(word ===""){
        setFiltData(
          clubData.filter((value)=>{
            return value.clubName.toLowerCase();
          })
        );
      }
      else{
      setFiltData(newFilter);
    }
  }

  return (
    <div className='search'>
      <div className='searchInputs'>
        <Box>
          <input name="Search" type="text" placeholder='Search...' onChange={handleFilter} />
          <button type='submit' postion="static"><SearchIcon/></button>
        </Box>
        {filterData.length != 0 && (
          <div className="pageResult">
            {filterData.slice(0, 30).map((value, key) => {
              return <a className="dataItem" href="#" onClick={() => { //swap to club info, but also document.cookie = 'searchedFor=clubName'
                document.cookie= 'clubName=' + value.clubName
                props.swap('ClubInfo')}}>
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