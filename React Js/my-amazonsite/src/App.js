import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes,} from 'react-router-dom'
import Nav1 from './components/Header/Nav1';
import Firstcard from './components/Cards1/Firstcard'
import Secondcard from './components/Cards2/Secondcard'
import Deals from './components/Today deal/Deals'

import Footer from './components/Footer/Footer';

import Sell from './components/Sell/Sell';
import Home from './components/Home/Home'

function App() {

  return (
    <div>
       <BrowserRouter>
       <Nav1 />
      
       <Routes> 
       <Route path='/Home' element={<Home />}/>
       <Route path='/Sell' element={<Sell />}/>
       </Routes>
     
       </BrowserRouter>
       <Firstcard />
      <Secondcard />
      <div id='today'><b>Today's Deals</b> See all deals </div> <br/>
      <div id='deals_container'>
        {/* images by using props calling one by one */}
        <div> <Deals image='https://m.media-amazon.com/images/I/41xnfQ6+TCL._AC_SY200_.jpg' height='280px' />
          <span1>Up to 38% off</span1> <p>Deal of the Day </p>
          Best Selling Vivo Smartphones
        </div>
        <div><Deals image='https://m.media-amazon.com/images/I/41uGjvXbeBL._AC_SY200_.jpg' height='280px' />
          <span1>Up to 38% off</span1> <p>Deal of the Day </p>
          Best Selling Vivo Smartphones  </div>
        <div><Deals image='https://m.media-amazon.com/images/I/31Ri-FAMBUL._AC_SY200_.jpg' height='280px' />
          <span1>Up to 38% off</span1> <p>Deal of the Day </p>
          Best Selling Vivo Smartphones  </div>
        <div> <Deals image='https://m.media-amazon.com/images/I/51kdwtY1KvL._AC_SY200_.jpg' height='280px' />
          <span1>Up to 38% off</span1> <p>Deal of the Day </p>
          Best Selling Vivo Smartphones </div>
        <div><Deals image='https://m.media-amazon.com/images/I/31pZXhckOhL._AC_SY200_.jpg' height='280px' />
          <span1>Up to 38% off</span1> <p>Deal of the Day </p>
          Best Selling Vivo Smartphones </div>
        <div><Deals image='https://m.media-amazon.com/images/I/41pyFK774YL._AC_SY200_.jpg' height='280px' />
          <span1>Up to 38% off</span1> <p>Deal of the Day </p>
          Best Selling Vivo Smartphones </div>
        <div><Deals image='https://m.media-amazon.com/images/I/41dA113N-LL._AC_SY200_.jpg' height='280px' />
          <span1>Up to 38% off</span1> <p>Deal of the Day </p>
          Best Selling Vivo Smartphones </div>
        <div><Deals image='https://m.media-amazon.com/images/I/310L1tvautL._AC_SY200_.jpg' height='280px' />
          <span1>Up to 38% off</span1> <p>Deal of the Day </p>
          Best Selling Vivo Smartphones </div>
        <div> <Deals image='https://m.media-amazon.com/images/I/51MTW5OKkUS._AC_SY200_.jpg' height='280px' />
          <span1>Up to 38% off</span1> <p>Deal of the Day </p>
          Best Selling Vivo Smartphones </div>
        <div><Deals image='https://m.media-amazon.com/images/I/41dA113N-LL._AC_SY200_.jpg' height='280px' />
          <span1>Up to 38% off</span1> <p>Deal of the Day </p>
          Best Selling Vivo Smartphones </div>
      </div> 
      <h3>Frequently repurchased in Personal Care and Home</h3>
      <div id='deals_container'>
        {/* images by using props calling one by one */}
        <div> <Deals image='https://m.media-amazon.com/images/I/61DKLhAwWuL._AC_SY200_.jpg' height='280px' />
         </div>
        <div><Deals image='https://m.media-amazon.com/images/I/71IRotZcFyL._AC_SY200_.jpg' height='280px' />
          </div>
        <div><Deals image='https://m.media-amazon.com/images/I/715Qw286tjL._AC_SY200_.jpg' height='280px' />
           </div>
        <div> <Deals image='https://m.media-amazon.com/images/I/51wipWT3wBL._AC_SY200_.jpg' height='280px' />
           </div>
        <div><Deals image='https://m.media-amazon.com/images/I/41JB6NyI+YL._AC_SY200_.jpg' height='280px' />
          </div>
        <div><Deals image='https://m.media-amazon.com/images/I/61O0Lpv4-PL._AC_SY200_.jpg' height='280px' />
         </div>
        <div><Deals image='https://m.media-amazon.com/images/I/615FzoQlreL._AC_SY200_.jpg' height='280px' />
          </div>
        <div><Deals image='https://m.media-amazon.com/images/I/91rz4skuvBL._AC_SY200_.jpg' height='280px' />
           </div>
        <div> <Deals image='https://m.media-amazon.com/images/I/51-62ATXgCL._AC_SY200_.jpg' height='280px' />
           </div>
        <div><Deals image='https://m.media-amazon.com/images/I/81jmFDAJ62L._AC_SY200_.jpg' height='280px' />
           </div>
      </div>
      <h3>Frequently repurchased in Grocery</h3>
      <div id='deals_container'>
        {/* images by using props calling one by one */}
        <div> <Deals image='https://m.media-amazon.com/images/I/81hGyejLA6L._AC_SY200_.jpg' height='280px' />
         </div>
        <div><Deals image='https://m.media-amazon.com/images/I/81rB7KGlHqL._AC_SY200_.jpg' height='280px' />
          </div>
        <div><Deals image='https://m.media-amazon.com/images/I/71rOacbwCwL._AC_SY200_.jpg' height='280px' />
           </div>
        <div> <Deals image='https://m.media-amazon.com/images/I/61pBNKGAWJL._AC_SY200_.jpg' height='280px' />
           </div>
        <div><Deals image='https://m.media-amazon.com/images/I/81zB6gZk7XL._AC_SY200_.jpg' height='280px' />
          </div>
        <div><Deals image='https://m.media-amazon.com/images/I/51Vr-TGjtYL._AC_SY200_.jpg' height='280px' />
         </div>
        <div><Deals image='https://m.media-amazon.com/images/I/51kpI8YzvmL._AC_SY200_.jpg' height='280px' />
          </div>
        <div><Deals image='https://m.media-amazon.com/images/I/71vL0r5ipXL._AC_SY200_.jpg' height='280px' />
           </div>
        <div> <Deals image='https://m.media-amazon.com/images/I/71W1XCVDlML._AC_SY200_.jpg' height='280px' />
           </div>
        <div><Deals image='https://m.media-amazon.com/images/I/81AZoRco9vL._AC_SY200_.jpg' height='280px' />
           </div>
      </div>
      <h3>Up to 60% off | Always choose the right décor for your home   <span>See all offers</span></h3> 
      <div id='deals_container'>
        {/* images by using props calling one by one */}
        <div> <Deals image='https://m.media-amazon.com/images/I/617+DXivlzL._AC_SY200_.jpg' height='280px' />
         </div>
        <div><Deals image='https://m.media-amazon.com/images/I/71wopn34BZS._AC_SY200_.jpg' height='280px' />
          </div>
        <div><Deals image='https://m.media-amazon.com/images/I/51pVnJpXdGL._AC_SY200_.jpg' height='280px' />
           </div>
        <div> <Deals image='https://m.media-amazon.com/images/I/61hdcm01bWL._AC_SY200_.jpg' height='280px' />
           </div>
        <div><Deals image='https://m.media-amazon.com/images/I/61aVsVXADpL._AC_SY200_.jpg' height='280px' />
          </div>
        <div><Deals image='https://m.media-amazon.com/images/I/61l055BysNL._AC_SY200_.jpg' height='280px' />
         </div>
        <div><Deals image='https://m.media-amazon.com/images/I/71P3aOTJCdL._AC_SY200_.jpg' height='280px' />
          </div>
        <div><Deals image='https://m.media-amazon.com/images/I/81UKPSqsnwL._AC_SY200_.jpg' height='280px' />
           </div>
        <div> <Deals image='https://m.media-amazon.com/images/I/81ABxpz1ZJL._AC_SY200_.jpg' height='280px' />
           </div>
        <div><Deals image='https://m.media-amazon.com/images/I/71hHLZk3LFL._AC_SY200_.jpg' height='280px' />
           </div>
      </div>
      <h3>Best Sellers in Computers & Accessories</h3> 
      <div id='deals_container'>
        {/* images by using props calling one by one */}
        <div> <Deals image='https://m.media-amazon.com/images/I/61KNJav3S9L._AC_SY200_.jpg' height='280px' />
         </div>
        <div><Deals image='https://m.media-amazon.com/images/I/61m5Uu4OMJL._AC_SY200_.jpg' height='280px' />
          </div>
        <div><Deals image='https://m.media-amazon.com/images/I/516LU0H963L._AC_SY200_.jpg' height='280px' />
           </div>
        <div> <Deals image='https://m.media-amazon.com/images/I/61zroMjd9FL._AC_SY200_.jpg' height='280px' />
           </div>
        <div><Deals image='https://m.media-amazon.com/images/I/61w9XoA1edL._AC_SY200_.jpg' height='280px' />
          </div>
        <div><Deals image='https://m.media-amazon.com/images/I/61xNG4wjOuL._AC_SY200_.jpg' height='280px' />
         </div>
        <div><Deals image='https://m.media-amazon.com/images/I/41KuRShR97L._AC_SY200_.jpg' height='280px' />
          </div>
        <div><Deals image='https://m.media-amazon.com/images/I/51nzIs6jTCL._AC_SY200_.jpg' height='280px' />
           </div>
        <div> <Deals image='https://m.media-amazon.com/images/I/71Zf9uUp+GL._AC_SY200_.jpg' height='280px' />
           </div>
        <div><Deals image='https://m.media-amazon.com/images/I/913C9PlkyfL._AC_SY200_.jpg' height='280px' />
           </div>
      </div>

      <h3>Checkout the latest collections from Local shops   <span>See all offers</span></h3> 
      <div id='deals_container'>
        {/* images by using props calling one by one */}
        <div> <Deals image='https://m.media-amazon.com/images/I/610T5-u8ZRL._AC_SY200_.jpg' height='280px' />
         </div>
        <div><Deals image='https://m.media-amazon.com/images/I/61-xhMpd8iL._AC_SY200_.jpg' height='280px' />
          </div>
        <div><Deals image='https://m.media-amazon.com/images/I/711Bx2LM40L._AC_SY200_.jpg' height='280px' />
           </div>
        <div> <Deals image='https://m.media-amazon.com/images/I/61Qf2R3vatL._AC_SY200_.jpg' height='280px' />
           </div>
        <div><Deals image='https://m.media-amazon.com/images/I/51n+u1do49L._AC_SY200_.jpg' height='280px' />
          </div>
        <div><Deals image='https://m.media-amazon.com/images/I/71MrcMi43oS._AC_SY200_.jpg' height='280px' />
         </div>
        <div><Deals image='https://m.media-amazon.com/images/I/71KA8EZ-rFL._AC_SY200_.jpg' height='280px' />
          </div>
        <div><Deals image='https://m.media-amazon.com/images/I/61woZXfrlwS._AC_SY200_.jpg' height='280px' />
           </div>
        <div> <Deals image='https://m.media-amazon.com/images/I/6153FimJaaL._AC_SY200_.jpg' height='280px' />
           </div>
        <div><Deals image='https://m.media-amazon.com/images/I/71yUxolgkJL._AC_SY200_.jpg' height='280px' />
           </div>
      </div>
    
      <Footer/>
      
    </div>
  );
}

export default App;
