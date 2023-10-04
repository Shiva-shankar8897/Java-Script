import React from 'react'
import './Headnav.css'

function Headnav() {
    return (
        <div>
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="javascript:void(0)"><img src='https://www.thesun.co.uk/wp-content/uploads/2022/02/Amazon-Logo-1024x426-1.png' height='50px' /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="mynavbar">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0)">
                                    Hello <br />
                                    <span>Select your address</span>
                                </a>
                            </li>
                            <div>
                                <form class="d-flex">
                                    <input class="form-control me-2" type="text" placeholder=" All | Search Amazon.in  " />

                                </form>
                            </div>
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0)">
                                    <span><img src='https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png' alt='flag' height='20px' /> <nbsp />EN</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0)">
                                    Hello, Sign in<br />
                                    <span>Accounts & Lists</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0)">
                                    <span>Returns</span><br />
                                    <span>& Orders</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0)">
                                    <span><img id='cart' src='https://cdn-icons-png.flaticon.com/128/3625/3625090.png' height='40px' /> <nbsp /> <nbsp />Cart</span>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            <nav class="navbar navbar-expand-sm ">
                <div class="container-fluid">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa fa-bars"></i> <nbsp />All</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Amazon miniTv</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sell</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Best Sellers</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Today's Deals</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Mobiles</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">New Releases</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Customer service</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Prime</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Electronics</a>
                        </li>
                    </ul>
                    <img src='https://m.media-amazon.com/images/G/31/Events/img23/Aug23ART/GW/AugART23_SWM_ST._CB599313433_.jpg' />


                </div>
            </nav>
            <div><img src='https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Aug23ART/T2_AugART23_PC_Banner_NTA.jpg' width='100%' /></div>
            <div><img src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/prime-banner-1_FT.jpg' width='100%' /></div>
                  <br/> <br/>
            <div id="demo" class="carousel slide" data-bs-ride="carousel">


                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
               
                </div>


                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://m.media-amazon.com/images/G/31/Events/img23/Aug23ART/AugART23_T1_HHalo_Devices_V1._SS300_QL85_FMpng_.png" height='100px' alt="Los Angeles" class="d-block" />
                        <img src="https://m.media-amazon.com/images/G/31/Events/img23/Aug23ART/AugART23_T1_HHalo_OHL_V1._SS300_QL85_FMpng_.png" height='100px' alt="New York" class="d-block" />
                        <img src="https://m.media-amazon.com/images/G/31/Events/img23/Aug23ART/AugART23_T1_HHalo_SL_V1._SS300_QL85_FMpng_.png" height='100px' alt="Chicago" class="d-block" />
                    </div>
                   
                   
                </div>


                <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>


        </div>
    )
}

export default Headnav
