import React from 'react';
import Spash from './Spash';
import Login from './Login';
import Home from './Home';
import Settings from './Settings';
import { BrowserRouter as Router,HashRouter, Route, Routes } from 'react-router-dom';
import Onboard from './Onboard';
import Check from './Check';
import Exam from './Exam';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/examsys' element={<Spash/>}/>
        <Route path='/examsys/login' element={<Login/>}/>
        <Route path='/examsys/onboard' element={<Onboard/>}/>
        <Route path='/examsys/home' element={<Home/>}/>
        <Route path='/examsys/settings' element={<Settings/>}/>
        <Route path='/examsys/check' element={<Check/>}/>
        <Route path='/examsys/exam' element={<Exam/>}/>
      </Routes>
    </Router>
  );
}

export default App;
