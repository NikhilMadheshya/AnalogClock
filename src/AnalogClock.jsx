import React from 'react';
import {TimeProvider} from './TimeContext';
import { useContext } from 'react';
import Hour from './Hour';
import Minute from './Minute';
import Second from './Second';

const AnalogClock=()=>{
const context=useContext(TimeProvider);
return(
  <div className='clock'>
    
    <div className='digital'>
     <span id='hour'>{context.hour_hand}</span>
     <p>:</p>
     <span id='min'>{context.min_hand}</span>
     <p>:</p>
     <span id='sec'>{context.sec_hand}</span>
     </div>
     
     <Minute/>
      <Second/>
      <Hour/>

     <span className='node'></span>
 </div>
)
};

export default AnalogClock;