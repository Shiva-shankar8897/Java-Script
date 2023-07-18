import React from 'react'
import './Itemsblock.css'

function Itemsblock(props) {
  return (
    <div>
       {/* <div>
        <img src='https://images-eu.ssl-images-amazon.com/images/I/51hLJoTdvhL._AC_UL160_SR160,160_.jpg'alt='lipstick'/>
        <p id='text'> <span>C2P PRO Lip FX Matte</span><br/><span> Lipstick Long Lasting</span> <br/><span>Pigmented, Silky</span> <br/><span>Smooth Creamy Matte</span> <br/><span>Finish, with Vitamin E,</span><br/> <span>Shea Butter for Hydra</span><br/>
           <span> stars 21</span> <br/>
            <strong><span> ₹549.00</span></strong></p> <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
        </div> */}
         <div>
        <img src={props.image} alt='image'/>
        <p id='text'> <span>{props.name}</span>
        {/* <br/><span> {props.name}</span>
         <br/><span>{props.name}</span> <br/>
         <span>{props.name}</span> <br/>
         <span>{props.name}</span><br/>
          <span>{props.name}</span><br/> */}</p>
          <p>{props.rating}</p>
          <p> <span> {props.numRatings}</span> </p>
           <p> <strong><span> {props.price}</span></strong></p>
      </div> 
    </div>
  )
}

export default Itemsblock
