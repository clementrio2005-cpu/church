import React from 'react'
import '../styles/Footer.css'


const Footer = () => {
  return (
    <footer className="footer">
    <section>
      <div className="footer-section">
        <div className="footer-section-1">
          <h3>St. Mary's Church</h3>
          <p>"Where faith, love, and community come together."</p>
          <p>123 Church Street, City, State, ZIP Code</p>
          <p>Phone: (123) 456-7890</p>
          <p>
            Email:
            <a href="mailto:contact@churchname.org">contact@churchname.org</a>
          </p>
          <div>
            <a href="#"><img src="facebook-icon.png" alt="Facebook" /></a>
            <a href="#"><img src="instagram-icon.png" alt="Instagram" /></a>
            <a href="#"><img src="twitter-icon.png" alt="Twitter" /></a>
          </div>
        </div>
        <div className="footer-section-2">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Donate</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section-3">
          <h4>Stay Connected</h4>
          <p>"Receive updates and inspiration from the church"</p>
        </div>
      </div>
      <div className="footer-bottom-1">
        <p>
          "For where two or three are gathered in my name, there am I with
          them." – Matthew 18:20
        </p>
      </div>
      <div className="footer-bottom-2">
        <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
      </div>
    </section>
  </footer>
  )
}

export default Footer