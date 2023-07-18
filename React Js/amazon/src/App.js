import logo from './logo.svg';
import './App.css';
import Nav from './components/website/Nav';
import Deal from './components/cards/Deal';
import Items from './components/items/Items';
import Itemsblock from './components/items/itemsblock/Itemsblock';

function App() {
  const DealImages=['https://m.media-amazon.com/images/I/61INH+-JS5L._AC_SY200_.jpg','https://m.media-amazon.com/images/I/51YkL+O5zQL._AC_SY200_.jpg',
                   'https://m.media-amazon.com/images/I/61NPBdDBojL._AC_SY200_.jpg','https://m.media-amazon.com/images/I/31Dv4PiE8eL._AC_SY200_.jpg',
                   'https://m.media-amazon.com/images/I/41asxiEZAnL._AC_SY200_.jpg','https://m.media-amazon.com/images/I/61VmOcTl-uL._AC_SY200_.jpg',
                  'https://m.media-amazon.com/images/I/61ry6PloYfL._AC_SY200_.jpg','https://m.media-amazon.com/images/I/71fEgl3UhrL._AC_SY200_.jpg',
                  'https://m.media-amazon.com/images/I/51j9uND0DQL._AC_SY200_.jpg','https://m.media-amazon.com/images/I/81T8Txq2VGL._AC_SY200_.jpg']
  return (
   <div>
   <Nav/> 
   <br/>
   <div id='dealsection'>  
   
   {/* images by using props calling one by one */}
   <Deal image='https://m.media-amazon.com/images/I/61INH+-JS5L._AC_SY200_.jpg'height='280px'/>
   <Deal image='https://m.media-amazon.com/images/I/61NPBdDBojL._AC_SY200_.jpg'height='280px'/>
   <Deal image='https://m.media-amazon.com/images/I/61ry6PloYfL._AC_SY200_.jpg'height='280px'/>
   <Deal image='https://m.media-amazon.com/images/I/71fEgl3UhrL._AC_SY200_.jpg'height='280px'/>
   <Deal image='https://m.media-amazon.com/images/I/51j9uND0DQL._AC_SY200_.jpg'height='280px'/>
   <Deal image='https://m.media-amazon.com/images/I/41asxiEZAnL._AC_SY200_.jpg'height='280px'/>
   <Deal image='https://m.media-amazon.com/images/I/81T8Txq2VGL._AC_SY200_.jpg'height='280px'/>
   <Deal image='https://m.media-amazon.com/images/I/31Dv4PiE8eL._AC_SY200_.jpg'height='280px'/>
   <Deal image='https://m.media-amazon.com/images/I/51YkL+O5zQL._AC_SY200_.jpg'height='280px'/>
   <Deal image='https://m.media-amazon.com/images/I/61VmOcTl-uL._AC_SY200_.jpg'height='280px'/>
    </div>
    <div id="arraydeal"> 
     {/* images by using array calling one by one*/}
      {DealImages.map((image,index) => <Deal image={image}/>)}</div>
      <div>  
    
        <Items />
        </div>
      
   </div>
  );
}

export default App;















