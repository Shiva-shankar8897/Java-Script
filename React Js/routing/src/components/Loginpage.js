import React from 'react'
import { useNavigate } from 'react-router-dom';

function Loginpage() {
    const navigate=useNavigate()
    const handlelogin=(event)=>{
        event.preventDefault();
        alert('Login Successed')
        navigate('/about')
    }
  return (
    <div>
        <form onSubmit={handlelogin}>
      <div>
        <label>UserName: </label>
        <input type='text' />
      </div>
      <div>
        <label>Password: </label>
        <input type='password' />
      </div>
      <input type='submit' value='Login' />
      </form>
    </div>
  )
}

export default Loginpage
