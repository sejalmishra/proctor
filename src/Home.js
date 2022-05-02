import React, { useState } from 'react';
import {classes} from './data';
import SingleSubject from './SingleSubject';

const Home = () => {
    const [showInfo, setShowInfo] = useState(false);
    const [exams, setexams] = useState(classes);

    const goto = () => {
      window.location.href = '/settings'   
    }
  return (
    <div>
      <div>
        <h1>My Classes</h1>
        <div>
           {exams.map((cls) => {
             return (
                 <SingleSubject key={cls.id} {...cls}></SingleSubject>
             );
         })}
        </div>
     </div>
      <footer>
      <a>Take Demo Exam</a>
      <div><p>Samuel Doe</p>
          <p>18B1S1241</p>
          <button onClick={goto}>photo</button>
      </div>
      </footer>
    </div>
  );
};

export default Home;
