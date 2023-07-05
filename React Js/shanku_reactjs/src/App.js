import logo from './logo.svg';
import './App.css';

function App() {
  const current=new Date();
  const date=current.getDate();
  const day=current.getDay();
  const month=current.getMonth();
  const year=current.getFullYear();
  const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months=["January","February","March","April","May","June","July","August","September","October","November","December"]
  return (
    <div className="App">
     <h2>Learning ReactJs  Today Onwards  {days[day]}: {date}-{months[month]}-{year}</h2>
      <p>From Today Onwards I am Learning React Js [26-06-2023] <br/>
       <u> Features</u><br/>
        1.code reusability<br/>
        2.Manipulate DOM easily<br/>
        3.Faster than Js<br/>
        4.Routing
      </p>
      
    </div>
  );
}

export default App;
