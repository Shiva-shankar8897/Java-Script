import React from 'react'

function Mobiles() {
    const firstfiveImages = AcData.slice(0, 5)
  return (
    <div>
       <div class="container-fluid">
                <h2>Mobiles</h2>
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

export default Mobiles
