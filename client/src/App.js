import logo from './logo.svg';
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
import SearchBar from './components/SearchBar';
import Search from './components/Search';
import Statistics from './components/Statistics';
import ErrorPage from './components/ErrorPage';
import Club2 from './components/Club2'
import Club3 from './components/Club3'
import Club4 from './components/Club4'
import SignUp from './components/SignUp'


function App(props) {
  const [page, setPage] = useState(props.page)
  
  const changePage = (newPage) => {
    if(newPage === 'AhCounter'){
      console.log('ok')
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
    }else if(newPage === 'Errorpage'){
      setPage(<ErrorPage swap = {changePage}></ErrorPage>)
    }else if(newPage === 'Club2'){
      setPage(<Club2 swap = {changePage}></Club2>)
    }else if(newPage === 'Club3'){
      setPage(<Club3 swap = {changePage}></Club3>)
    }else if(newPage === 'Club4'){
      setPage(<Club4 swap = {changePage}></Club4>)
    } else if (newPage === 'SignUp'){
      setPage(<SignUp swap={changePage}></SignUp>)
    }
  }
  if(!page){
    setPage(<App page = {<Login swap = {changePage}></Login>} swap = {changePage}></App>)
  }
  return (
    <div className="App">   
      <Navbar swap={changePage}/> 
      
      {page}
    </div>

  );
}

export default App;

