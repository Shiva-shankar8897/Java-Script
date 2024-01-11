import React,{ useState }   from 'react'

function AirconditionerPage() {
    const [selectedProduct, setselectedProduct] = useState([])
    const CompanyHandler = (flip) => {
        if (selectedProduct.includes(flip)) {
            setselectedProduct(selectedProduct.filter(item => item !== flip))
        } else {
            setselectedProduct([...selectedProduct, flip])
        }
    }
    const FilteredProduct = selectedProduct.length === 0 ?
        AcData : AcData.filter((kart) => selectedProduct.includes(kart.company))
    return (
        <div>
            <div class="container-fluid">
                {AcData.map((ac) => {
                    return (
                        <div className='pro-input'>
                            <label>
                                <input type='checkbox'
                                    checked={selectedProduct.includes(ac.company)}
                                    onChange={() => CompanyHandler(ac.company)} />
                                {ac.company}
                            </label>
                        </div>
                    )
                })}
                {
                    FilteredProduct.map((item) => {
                        return (
                            <div>
                                <Link to={`/Ac/${item.id}`}>
                                    <div className='pageImg'>
                                        <img src={item.image} alt='pic' />
                                    </div>
                                </Link>
                                <div className='proModel'>
                                    {item.company} , {item.model} , {item.price}
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default AirconditionerPage
