import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
  <div>
   <div className='header'>
   All 
   Amazon miniTV
   Sell
   Best Sellers
   Mobiles
   Today's Deals
   Customer Service
   New Releases
   Electronics
   Prime
  </div>
<br/>
   <div className='card'>
    <div className='img'>
     <img  height='100px' width='150px'src='https://images-eu.ssl-images-amazon.com/images/I/41zceDgAm-L._AC_SX184_.jpg'/><br/>
     <h4>boAt Stone</h4>
     <p><span>$12900<sup>00</sup></span> <del>$24900.00</del></p> 
    </div>
    <div className='img'>
     <img height='100px' src='https://images-eu.ssl-images-amazon.com/images/I/41baWmvaJLL._AC_SX184_.jpg'/><br/>
     <h4>SanDisk Cruzer Blade 64GB</h4>
     <p><span>$399 <sup>00</sup></span> <del>$1,100.00</del></p> 
    </div>
    <div className='img'>
     <img  height='100px' width='150px'src='https://images-eu.ssl-images-amazon.com/images/I/41fijmiALSL._AC_SX184_.jpg'/><br/>
     <h4>Samsung Galaxy Tab S8</h4>
     <p><span>$12900<sup>00</sup></span> <del>$24900.00</del></p> 
    </div>
    <div className='img'>
     <img height='120px'width='150px' src='https://m.media-amazon.com/images/I/51hQfTroMzL._AC._SR360,460.jpg'/><br/>
     <h4>Oneplus TVs Crazy Offers</h4>
     <p><span>$15,999.00<sup>00</sup></span> <del>$24000.00</del></p> 
    </div>
    <div className='img'>
     <img height='100px' width='150px' src='https://m.media-amazon.com/images/I/61ZjlBOp+rL._AC_UL320_.jpg'/><br/>
     <h4>Smart Watches</h4>
     <p><span>$2500<sup>00</sup></span> <del>$5000.00</del></p> 
    </div>
    </div>
  </div>
  
    
  )
} 

export default Navbar
