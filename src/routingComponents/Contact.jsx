import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-blue-50 p-4">
      
        <form className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-6 md:mr-8 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-green mb-4 text-center">Contact Us</h2>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
            <input
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green"
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
            <input
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green"
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="mobile">Mobile Number</label>
            <input
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green"
          type="tel"
          id="mobile"
          name="mobile"
          placeholder="Your Mobile Number"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="message">Message</label>
            <textarea
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green"
          id="message"
          name="message"
          rows="4"
          placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green text-white py-2 rounded hover:bg-green-900 transition"
          >
            Send Message
          </button>
        </form>
        {/* Contact Info */}
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4">
        <h3 className="text-xl font-semibold text-green mb-2">Get in Touch</h3>
        <div>
          <span className="font-semibold text-gray-700">Address:</span>
          <div className="text-gray-600">
            Church of St. Joseph<br />
            Kottayam, Kerala<br />
            India - 686001
          </div>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Phone:</span>
          <div className="text-gray-600">+91 123 456 7890</div>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Email:</span>
          <div className="text-gray-600">info@stjosephchurch.org</div>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Service Times:</span>
          <ul className="text-gray-600 list-disc list-inside">
            <li>Sunday Mass: 8:00 AM &amp; 10:30 AM</li>
            <li>Wednesday Service: 7:00 PM</li>
            <li>Friday Prayer: 6:30 PM</li>
          </ul>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Office Hours:</span>
          <ul className="text-gray-600 list-disc list-inside">
            <li>Mon - Fri: 9:00 AM - 5:00 PM</li>
            <li>Saturday: 9:00 AM - 2:00 PM</li>
            <li>Sunday: After morning services</li>
          </ul>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Emergency Contact:</span>
          <div className="text-red-600 font-bold">+91 987 654 3210</div>
          <div className="text-gray-600 text-sm">For urgent pastoral care or emergencies</div>
        </div>
      </div>
    </div>
  )
}

export default Contact