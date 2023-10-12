import React from 'react'
import '../components/Name.css'
import smoke from '../components/smoke.mp4'
 

function Name() {
  return (
    <div>
    <section>
     <video src={smoke} autoPlay muted />
      <h1>
        <span>S</span>
        <span>H</span>
        <span>I</span>
        <span>V</span>
        <span>A</span>
        <span>S</span>
        <span>H</span>
        <span>A</span>
        <span>N</span>
        <span>K</span>
        <span>A</span>
        <span>R</span>
      </h1>
    </section>
    </div>
  )
}

export default Name
