import React,{ useContext }  from 'react';
import {TimeProvider} from './TimeContext';

const Second=()=>{
const context=useContext(TimeProvider);
let per_sec_deg=6;
let css={'transform':`rotate(${context.sec_hand*per_sec_deg}deg)`};
return (
<span className='second' style={css}></span>
)
}

export default Second;