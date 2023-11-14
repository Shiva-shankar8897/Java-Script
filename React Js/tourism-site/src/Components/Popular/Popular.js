import React from 'react'
import './Popular.css'
import {BsArrowLeftShort,BsArrowRightShort, BsDot} from 'react-icons/bs'
import img from '../../Images/nature.jpg'

function Popular() {
  return (
    <div>
      <section className='popular section container'>
        <div className='secContainer'>

          <div className='secHeader flex'>
            <div className='textDiv'>
              <h2 className='secTitle'>
                Popular Destination
              </h2>
              <p>
                From historical cities to natural specteculars, come see the best of the world! 
              </p>
            </div>

            <div className='iconsDiv flex'>
              <BsArrowLeftShort className='icon leftIcon' />
              <BsArrowRightShort className='icon' />
            </div>
          </div>

          <div className='mainContent grid'>
            <div className='singleDestination'>
              <div className='destImage'>
                <img src={img} alt='title' />

                <div className='overlayInfo'>
                  <h3>Some text</h3>
                  <p>
                    Lorem ipsum 
                  </p>

                  <BsArrowRightShort className='icon' />
                </div>

              </div>
            </div>
            <div className='destFooter'>
              <div className='number'>
                01
              </div>
              <div className='destText flex'>
                <h6>London</h6>
                <span className='flex'>
                  <span className='dot'>
                    <BsDot className='icon' />
                    ssk
                  </span>
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Popular
