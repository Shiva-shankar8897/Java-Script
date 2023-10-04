import React from 'react'
import {Link} from 'react-router-dom'
import './Nav1.css'


function Nav1() {
  return (
    <div>
      <div className='container'>
      <div id='header_container'>
        <div> <img src='https://i0.wp.com/www.fontshut.com/wp-content/uploads/2023/02/Amazon-Logo-Font-1-scaled-1.jpg?fit=2560%2C1578&ssl=1' alt='logo' height='50px' /></div>
        <div>
            <span><img id='location' src='https://cdn-icons-png.flaticon.com/128/3894/3894030.png' /> </span>
            <span>Hello</span><br/>
            <span>Select your Address</span>
        </div>
        <div>
         <input id='text' type='text' placeholder=' All |Search Amazon.in'/>
        </div>
        <div id='lang'>
            <span><img src='https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png'alt='flag'height='20px'/> <nbsp />EN</span>
        </div>
        <div>
            <span>Hello, Sign in</span><br/>
            <span>Accounts & Lists</span>
        </div>
        <div>
            <span>Returns</span><br/>
            <span>& Orders</span>
        </div>
        <div>
            <span><img id='cart' src='https://cdn-icons-png.flaticon.com/128/3625/3625090.png'height='40px'/> <nbsp /> <nbsp />Cart</span>
        </div>
     </div>
     </div>
      <div id='header1'>
        <div><img id='menu' src='https://cdn-icons-png.flaticon.com/128/2976/2976215.png' /><nbsp /><nbsp /><Link to="/">Home</Link></div>
        <div> Amazon miniTV</div>
        <Link to="/Sell">Sell</Link>
        <div>Best Sellers</div>
        <div>Today's Deals</div>
        <div>Mobiles</div>
        <div>New Releases</div>
        <div>Customer Service</div>
        <div> Prime</div>
         <div>Electronics</div> <nbsp /> <nbsp />
        <div> New Launches from Mobiles,Electronics & more | Shop now</div>
        </div>
    </div>
  )
}

export default Nav1
