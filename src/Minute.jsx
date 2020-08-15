import React,{ useContext }  from 'react';
import {TimeProvider} from './TimeContext';

const Minute=()=>{
const context=useContext(TimeProvider);
let per_min_deg=6;
let css={'transform':`rotate(${context.min_hand*per_min_deg}deg)`};
return (
<span className='minute' style={css}></span>
)
}

export default Minute;