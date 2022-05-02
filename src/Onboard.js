import React, { useState } from 'react';
import {data} from './data';

const Onboard = () => {
    const [index, setIndex] = useState(0);
    const {id, pic, desc} = data[index];

    const changeContent = () => {
        if(index==3){
            window.location.href = '/home'
        }
        setIndex(index+1);
    }

  return (
    <div>
      <div>
        <div>{pic}</div>
        <h3>{desc}</h3>
        { index==3?
        <button onClick={changeContent}>Go to dashboard &gt;</button>:
        <button onClick={changeContent}>Continue &gt;</button>
        }
      </div>
        <button onClick={() => setIndex(3)}>Skip</button>
    </div>
  );
};

export default Onboard;
