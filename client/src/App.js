
import './App.css';
import Agenda  from './components/Agenda';
import { useState } from 'react';
import Navbar from './components/Navbar';
import CommentCard from './components/CommentCard';
import AhCounter from './components/AhCounter'
import HomePage from './components/HomePage';
import Timer from './components/Timer';
import ManageMembers from './components/ManageMembers';
import Evaluation from './components/Evaluation';
import Login from './components/Login'
import ResetPassword from './components/ResetPassword';
import ClubInfo from './components/ClubInfo';
import Search from './components/Search';
import Statistics from './components/Statistics';
import ClubPage from './components/ClubPage';
import Admin from './components/Admin';
import Profile from './components/Profile'
import SignUp from './components/SignUp'
import Reports from './components/Reports';
import React from 'react';


function App(props) {
  const [page, setPage] = useState(props.page)

  let temp = ''
  const cname = 'page'
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      temp = c.substring(name.length, c.length);
    }
  }
  console.log(temp)
  
  const changePage = (newPage) => {
    
    console.log('ok')
    document.cookie= 'page='+newPage+';'
    if(newPage === 'AhCounter'){
      setPage(<AhCounter swap = {changePage}></AhCounter>)
    } else if(newPage === 'Timer'){
      setPage(<Timer swap = {changePage}></Timer>)
    } else if(newPage === 'HomePage'){
      setPage(<HomePage swap = {changePage}></HomePage>)
    } else if(newPage === 'Agenda'){
      setPage(<Agenda swap = {changePage}></Agenda>)
    } else if(newPage === 'CommentCard'){
      setPage(<CommentCard swap = {changePage}></CommentCard>)
    } else if(newPage === 'Evaluation'){
      setPage(<Evaluation swap = {changePage}></Evaluation>)
    } else if(newPage === 'ResetPassword'){
      setPage(<ResetPassword swap = {changePage}></ResetPassword>)
    } else if(newPage === 'ClubInfo'){
      setPage(<ClubInfo swap={changePage}></ClubInfo>)
    } else if(newPage === 'Search'){
      setPage(<Search swap = {changePage}></Search>)
    } else if(newPage === 'ManageClub'){
      setPage(<ManageMembers swap = {changePage}></ManageMembers>)
    } else if(newPage === 'Statistics'){
      setPage(<Statistics swap={changePage}></Statistics>)
    } else if (newPage === 'SignUp'){
      setPage(<SignUp swap={changePage}></SignUp>)
    } else if (newPage === 'Reports'){
      setPage(<Reports swap={changePage}></Reports>)
    } else if (newPage === 'Logout'){
      localStorage.clear()
      document.cookie = "user={}"
      setPage(<Login swap={changePage}></Login>)
    } else if (newPage === 'Admin') {
      setPage(<Admin swap={changePage}></Admin>)
    } else if (newPage === 'ClubPage'){
      setPage(<ClubPage swap={changePage}></ClubPage>)
    } else if (newPage === 'Profile'){
      setPage(<Profile swap={changePage}> </Profile>)
    } 
    
    else {
      localStorage.clear()
      setPage(<Login swap={changePage}></Login>)
    }
  }
  if(!page){
    //
    if(!temp){
      document.cookie+= 'page=Login;'
      setPage(<App page = {<Login swap = {changePage}></Login>} swap = {changePage}></App>)
    } else {
      changePage(temp)
    }
  }
  return (
    <div className="App">   
      <Navbar swap={changePage}/> 
      
      {page}
    </div>

  );
}

export default App;

