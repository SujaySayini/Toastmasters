import logo from './logo.svg';
import './App.css';
import Agenda  from './components/Agenda';
import { useState } from 'react';
import Navbar from './components/Navbar';
import CommentCard from './components/CommentCard';
import AhCounter from './components/AhCounter'
import HomePage from './components/HomePage';
import ManageMembers from './components/ManageMembers';

function App() {
  const [page,setPage] = useState(<ManageMembers></ManageMembers>);

  return (
    <div className="App">   
      <Navbar swap={setPage}/> 
      {page}
    </div>
  );
}

export default App;

