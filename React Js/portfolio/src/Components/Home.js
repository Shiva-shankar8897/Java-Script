import React from 'react'
import banner from './Images/ssk.jpeg'

function Home() {
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6  p-3">
                    <p>I ' m</p> 
                    <p>Shiva Shankar</p>
                    <p><mark>Job seeker with Web/FrontEnd Development  | UI Role.</mark></p>
                    <button type="button" class="btn btn-dark">Resume Download</button>
                </div>
                <div class="col-sm-6  pt-5">
                    <div className='image'>
                        <img src={banner} style={{ height: 200}} alt='banner-pic' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home
