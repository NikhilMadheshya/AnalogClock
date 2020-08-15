import React,{ useContext }  from 'react';
import {TimeProvider} from './TimeContext';

const Hour=()=>{
const context=useContext(TimeProvider);
let per_hour_deg=30;
let css={'transform':`rotate(${context.hour_hand*per_hour_deg}deg)`};
return (
<span className='hour' style={css} ></span>
)
}

export default Hour;