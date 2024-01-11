import React from 'react'
import {AcData} from "../Data/ac"

function Airconditioners() {
    const firstfiveImages = AcData.slice(0, 5)
    return (
        <div>
             <h4>Air Conditioners</h4>
            <div class="container-fluid">
               
                {
                    firstfiveImages.map((item) => {
                        return (
                            <div class="card">
                                <img  class="rounded" src={item.image} alt='pic' />
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Airconditioners
