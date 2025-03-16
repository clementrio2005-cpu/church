import React from 'react'
import './About.css'
const About = () => {
  return (
    <section>
      <div className="container">
        <section className="header-section">
            <h1>Our Church: A Legacy of Faith & Renewal</h1>
            <p className="header-box">Embracing tradition, evolving for the future—our journey of faith continues.</p>
        </section>

        <section className="section">
            <h2>The Beginning of Our Church</h2>
            <img src="https://source.unsplash.com/200x200/?portrait,man" alt="Founder" className="person-photo"/>
            <p>Founded in 1895 by Reverend James Whitmore, our church was a beacon of faith and hope for the growing community...</p>
            <p>As years passed, it became a sanctuary for worship, community gatherings, and a source of spiritual guidance for generations.</p>
        </section>

        <section className="section">
            <h2>Our Journey: From Past to Present</h2>
            <div className="history-block">
                <h3>The Old Church</h3>
                <p>With its wooden pews and stained-glass windows, the old church stood as a testament to faith and unity...</p>
                <p>Over time, the need for a larger, more accessible space became clear, leading to a new vision for our church.</p>
                <div className="history-images">
                    <img src="https://source.unsplash.com/300x200/?old-church" alt="Old Church 1"/>
                    <img src="https://source.unsplash.com/300x200/?historic-church" alt="Old Church 2"/>
                </div>
            </div>
            <div className="history-block">
                <h3>The Vision for Renewal</h3>
                <p>Recognizing the growing needs of our congregation, we embarked on a transformative journey...</p>
                <p>Through faith, dedication, and the generosity of our community, we laid the foundation for a new place of worship.</p>
            </div>
            <div className="history-block">
                <h3>The New Church</h3>
                <p>Our newly constructed church stands as a symbol of faith, renewal, and unity. Designed to accommodate our growing congregation, the new church features a modern sanctuary, state-of-the-art facilities, and a welcoming space for all.</p>
                <p>Preserving elements from our old church, including the historic stained-glass windows and cross, we have blended tradition with innovation.</p>
                <p>With expanded seating, enhanced acoustics, and community spaces, the new church is more than a building—it is a home for worship, celebration, and fellowship.</p>
                <div className="history-images">
                    <img src="https://source.unsplash.com/300x200/?modern-church" alt="New Church 1"/>
                    <img src="https://source.unsplash.com/300x200/?church-interior" alt="New Church 2"/>
                </div>
            </div>
        </section>
    </div>
    </section>
  )
}

export default About