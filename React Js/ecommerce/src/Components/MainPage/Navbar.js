import React from 'react'

function Navbar() {
    return (
        <div>
            <nav class="nav nav nav-fill">
                <a class="nav-link" href="#"><h2>E-commerce</h2></a>
                <a class="nav-link" href="#">   <input type='text' placeholder='Search...' /></a>
                <a class="nav-link" href="#">SignIn/SignUp</a>
                <a class="nav-link disabled" aria-disabled="true">Cart</a>
            </nav>
            <div>
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Mobiles</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Computers</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Watches</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Men's Fashion</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Furniture</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Air Conditioners</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Women's Fashion</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Kitchen</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Television's</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Books</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Fridge</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Speakers</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
