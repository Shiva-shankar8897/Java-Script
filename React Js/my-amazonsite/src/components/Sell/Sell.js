import React from 'react'
import { useNavigate } from 'react-router-dom'

function Sell() {
    const navigate=useNavigate()
    const sell=(event)=>{
        navigate('/')
    }
  return (
    <div>
       <div id='card'>
       <div id='card1'>
           <h3>Starting ₹99 | All your home improvement needs</h3>
           <div id='cardimage'>
            <div> <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_4._SY116_CB600489960_.jpg' height='75px' />
               Spin mops, wipes & more</div>
            <div><img src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_3._SY116_CB600489960_.jpg' height='75px' />
             Bathroom hardware & accessories </div>  
           </div>
           <div id='cardimage1'>
           <div> <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_7._SY116_CB600489960_.jpg' height='75px' />
              Hammers, screwdrivers & more</div>
           <div><img src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_5._SY116_CB600489960_.jpg' height='75px' />
               Extension boards, plugs & more </div>  
            </div>
            Explore All
       </div>
       <div id='card2'><h3>Up to 70% off | Clearance store</h3>
         <div><img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg'height='300px' width='300px' /></div>
         See More </div> 
       <div id='card3'> <h3>Appliances for your home | Up to 55% off</h3>
       <div id='cardimage'>
            <div> <img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg' height='75px' /> <br/>
               Air Conditioners</div>
            <div><img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg' height='75px' />
             Refrigerators </div>  
           </div>
           <div id='cardimage1'>
           <div> <img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg' height='75px' />
              Microwaves</div>
           <div><img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg' height='75px' />
               Washing machines </div>  
            </div>
            See More
       
       </div>
       <div id='card4'>
            <div id='card41'><h3> <nbsp/>Sign in for your best experience</h3>
            <button id='btn'>Sign in securely</button></div> <br/>
            <div id='card42'>
                <img src='https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg' />
            </div>

       </div>

      </div>



        
    </div>
  )
}

export default Sell
