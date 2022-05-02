import React, { useState } from 'react';

const SingleSubject = ({ classname, classcode,exam1, exam2,exam3 }) => {
  const [showInfo, setShowInfo] = useState(false);
  const goto = () => {
    window.location.href = '/check' 
  }
  return (
    <article>
      <header>
        <h4>{classname}</h4>
        <p>{classcode}</p>
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? 'minus' : 'plus'}
        </button>
      </header>
      {showInfo && 
        <div>
        <div>
            <div>
            <span>{exam1.name}</span>
            <p>{exam1.date} . {exam1.time}</p>
            <span><button>{exam1.status}</button></span>
            </div>
        </div>
        <div>
            <div>
            <span>{exam2.name}</span>
            <p>{exam2.date} . {exam2.time}</p>
            <span><button onClick={goto}>{exam2.status}</button></span>
            </div>
        </div>
        <div>
            <div>
            <span>{exam3.name}</span>
            <p>{exam3.date} . {exam3.time}</p>
            <span><button>{exam3.status}</button></span>
            </div>
        </div>
        </div>
      }
    </article>
  );
};

export default SingleSubject;
