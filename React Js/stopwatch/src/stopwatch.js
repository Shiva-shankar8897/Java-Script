import React, { useState } from 'react'
import './stopwatch.css'

function Stopwatch() {
  const [time,setTime]=useState({ms:0,s:0,m:0,h:0})
 
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
