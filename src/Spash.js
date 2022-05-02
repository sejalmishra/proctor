import React from 'react';
import { Link } from 'react-router-dom';
import frame from './assets/frame.png';

const Spash = () => {
  return (
    <div>
      <div>
       <img src={frame}/>
       <h3>Welcome aboard to the future in the making you've just become a part of it</h3>
       <Link to={`/login`}><button>Continue &gt;</button></Link>
      </div>
    </div>
  );
};

export default Spash;
