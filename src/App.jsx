import React from 'react';
import AnalogClock from './AnalogClock';
import {Time} from './TimeContext';
import './style.css';
const App=()=>{
return (
<>
<h1>CLOCK</h1>
<Time>
<AnalogClock/>
</Time>
</>
);
}

export default App;