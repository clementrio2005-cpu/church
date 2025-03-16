import React from 'react'
import church1 from '../assets/church1.jpg'
import church2 from '../assets/church2.jpg'
import '../styles/ImageSlider.css'
const ImageSlider = () => {
  return (
    <section className="section-image">
        <figure>
            <img src={church1} alt="" className='imge-church1'/>
            {/* <img src={church2} alt="" /> */}
        </figure>
    </section>
  )
}

export default ImageSlider