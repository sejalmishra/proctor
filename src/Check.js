import React from 'react';
import Header from './Header';
import back from './assets/backbtn.png';
import guy from './assets/guywithband.png';
import right from './assets/right.png';
import wrong from './assets/wrong.png';
import buffer from './assets/buffer.png'
import theguy from './assets/theguy.png';
import './check.css';

const Spash = () => {
  const date = JSON.parse(localStorage.getItem('exam-date'));
  const time = JSON.parse(localStorage.getItem('exam-time'));

  const goback = () => {
    window.location.href = '/home'
  }
  const beginexam =()=> {
    window.location.href = '/exam'
  }
  return (
    <div>
    <Header/>
    <div className='container'>
      <img src={back} alt="goback" onClick={goback} style={{cursor: 'pointer'}}/>
      <h3 className='heading'>Graduate Record Examination</h3>
      <h4 className='date'>{date}</h4>
      <p className='time'>{time}</p>
      <img src={guy} className='guyy' alt="student-pic"/>
      <div className='specification'>
      <div className='checking'>
      <img src={right}/>
      <p>Webcam check</p>
      </div>
      <div className='checking'>
      <img src={right}/>
      <p>Mic testing</p>
      </div>
      <div className='checking'>
      <img src={wrong}/>
      <p>a Iris sync</p>
      </div>
      <div className='checking'>
      <img src={wrong}/>
      <p>BT / Alien hardware detection</p>
      </div>
      <div className='checking'>
      <img src={right}/>
      <p>QR / Virtual Machine detection</p>
      </div>
      <div className='checking'>
      <img src={buffer}/>
      <p>Browser lock</p>
      </div>
      <div className='checking'>
      <img src={buffer}/>
      <p>Screen capture</p>
      </div>
      <div className='checking'>
      <img src={buffer}/>
      <p>Identity authentication</p>
      </div>
      <div className='checking'>
      <button onClick={beginexam}>Start Exam</button>
      </div>
      </div>
      <div className='profile'>
      <p className='p1'>Samuel Doe</p>
      <p className='p2'>18BIS1241</p>
      <img src={theguy} className='profileimg'/>
      </div>
    </div>
    </div>
  );
};

export default Spash;
