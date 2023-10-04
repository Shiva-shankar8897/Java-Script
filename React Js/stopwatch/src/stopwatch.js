import React, { useState } from 'react'
import './stopwatch.css'

function Stopwatch() {
    const count=0;
    const [seconds,setSeconds]=useState(0)
    const [minutes,setMinutes]=useState(0)
    const [hours,setHours]=useState(0)

       setInterval(() => {
         count=count+1;
         setSeconds(count%60);
         setMinutes((count/60)%60);
         setHours(count/3600)
         }, 10);
        
    
  return (
    <div>
     <div id='watch'>
       <h2><span>00</span>:<span>00</span>:<span>00</span></h2>
       <button onClick={setInterval}>Start</button> <nbsp/>
       <button onClick={setInterval}>Stop</button> <nbsp/>
       <button onClick={setInterval}>Reset</button> <nbsp/>
      </div>
    </div>
  )
}

export default Stopwatch
