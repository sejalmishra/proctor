import React from 'react';
import frame from './assets/frame.png';
import { Link } from 'react-router-dom';

const Spash = () => {
  return (
    <div>
      <div>
        <Link to={`/home`}><button> &lt;</button></Link>
       <h3>Graduate Record Examination</h3>
      </div>
    <div>
        <img src={frame}/>
        <Link to={`/exam`}><button>Start Exam</button></Link>
    </div>
    </div>
  );
};

export default Spash;
