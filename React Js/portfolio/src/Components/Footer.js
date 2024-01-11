import React from 'react'
import logo from './Images/logo.png'

function Footer() {
    return (
        <div class="row bg-dark">
            <div class="col-sm-3 text-start p-5 bg-danger">
                <img src={logo} alt='logo' height={100} />

              
            </div>
            <div class="text-start">
                <p className='name'>Designed & Developed by SSK</p>
                <i class="fa fa-github" style={{ fontSize: "45px", color: "black" }}></i> &nbsp; &nbsp;
                <i class="fa fa-linkedin-square" style={{ fontSize: "45px", color: "blue" }}></i>
            </div>
            
        </div>

    )
}

export default Footer
