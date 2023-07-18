import React from 'react'
import './Nav.css'
function Nav() {
  return (
    <div>
      <div id='header'>
        <div> <img src='https://i0.wp.com/www.fontshut.com/wp-content/uploads/2023/02/Amazon-Logo-Font-1-scaled-1.jpg?fit=2560%2C1578&ssl=1' alt='logo' height='50px' /></div>
        <div>
            <span>Hello</span><br/>
            <span>Select your Address</span>
        </div>
        <div>
         <input id='text' type='text' placeholder='Search Amazon.in'/>
        </div>
        <div id='lang'>
            <span><img src='https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png'alt='flag'height='20px'/>EN</span>
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
            <span><img src='https://png.pngitem.com/pimgs/s/177-1771609_yue-jia-fresh-navigation-bar-shopping-cart-shopping.png'height='40px'/>Cart</span>
        </div>
     </div>
      <div id='header1'>
        <div>All</div>
        <div> Amazon miniTV</div>
        <div> Sell</div>
        <div>Best Sellers</div>
        <div>Today's Deals</div>
        <div>Mobiles</div>
        <div>New Releases</div>
        <div>Customer Service</div>
        <div> Prime</div>
         <div>Electronics</div>
        </div>
        {/* General card using several images */}
        <div id='card'>
          <div><b>Up to 50% off | Women's fashion from stores near by</b>    <span1>See all offers </span1></div> 
          <div id='cardimage'>
        <div><img src='https://m.media-amazon.com/images/I/61INH+-JS5L._AC_SY200_.jpg'height='280px'/></div>
        <div><img src='https://m.media-amazon.com/images/I/61ry6PloYfL._AC_SY200_.jpg'height='280px'/></div>
        <div><img src='https://m.media-amazon.com/images/I/51j9uND0DQL._AC_SY200_.jpg'height='280px'/></div>
        <div><img src='https://m.media-amazon.com/images/I/31Dv4PiE8eL._AC_SY200_.jpg'height='280px'/></div>
        <div><img src='https://m.media-amazon.com/images/I/51YkL+O5zQL._AC_SY200_.jpg'height='280px'/></div>
        <div><img src='https://m.media-amazon.com/images/I/81T8Txq2VGL._AC_SY200_.jpg'height='280px'/></div>
        <div><img src='https://m.media-amazon.com/images/I/41asxiEZAnL._AC_SY200_.jpg'height='280px'/></div>
        <div><img src='https://m.media-amazon.com/images/I/61VmOcTl-uL._AC_SY200_.jpg'height='280px'/></div>
        <div><img src='https://m.media-amazon.com/images/I/71fEgl3UhrL._AC_SY200_.jpg'height='280px'/></div>
        <div><img src='https://m.media-amazon.com/images/I/61NPBdDBojL._AC_SY200_.jpg'height='280px'/></div>
        </div>
        </div>
    </div>
  )
}

export default Nav
