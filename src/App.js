import logo from './logo.svg';
import './App.css';
import Agenda  from './components/Agenda';
import { useState } from 'react';
import Navbar from './components/Navbar';
import CommentCard from './components/CommentCard';
import AhCounter from './components/AhCounter'

function App() {
  const [page,setPage] = useState(<Agenda></Agenda>);

  return (
    <div className="App">   
      <Navbar swap={setPage}/> 
      {page}
    </div>
  );
}

export default App;
