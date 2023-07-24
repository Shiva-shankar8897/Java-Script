import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Homepage from './components/Homepage';
import Aboutpage from './components/Aboutpage';
import Contactpage from './components/Contactpage';
import Loginpage from './components/Loginpage';
import Users from './components/Users';

function App() {
  return (
    <div>
      <h1>My Website</h1>
      <BrowserRouter>
        {/* <a href='/about'>About</a> */}
        {/* In react we dont use anchor tags because the page is loading some duration of time this may effect
     react so that we use link */}
        <Link to='/about'>About</Link> <nbsp />
        <Link to='/contact'>Contact</Link> <nbsp />
        <Link to='/login'>Login</Link>  <nbsp />
        <Link to='/users'>Users</Link>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<Aboutpage />} />
          <Route path='/contact' element={<Contactpage />} />
          <Route path='/login' element={<Loginpage />} />
          <Route path='/users' element={<Users />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
