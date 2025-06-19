import React from 'react'
import '../styles/CFather.css'
import  cfather from '../assets/fatherImg/father3.jpg'
const CFather = () => {
  return (
    <section className="current-father">
        <section className="section-img-cfather">
          <figure className="figure-father">
            <img src={cfather} alt="" className='cfather-img'/>
          </figure>
        </section>
        <section className="section-content-cfather">
          <header className="heading-father">
            <h1 className="h1-father-name">Fr. Jerome gnana prabu</h1>
            <p className='content-para1-father'>- Parish prest</p>
            <p className="content-para2-father">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repellat quod veniam ad, eaque quo?

            </p>
            <p className='content-para3-father'>
              time period ( 2024 - 2028 )
            </p>
            <button> read more!</button>

          </header>
        </section>
    </section>
  )
}

export default CFather