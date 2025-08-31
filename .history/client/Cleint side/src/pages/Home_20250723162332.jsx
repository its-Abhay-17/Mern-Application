// import React from 'react'
import './page.css'
import img from './images/img.png'
const Home = () => {
  return (
    <div className='firstChild'> 
      <div className="home-parent">
        <div className=" home">
          <h3>We are the World Best IT Company</h3>
          <h1>Welcome to my Portfolio</h1>
          <p>Are you ready to take your business to the next level with cutting-edge IT solutions? Look no further! At Thapa Technical, we specialize in providing innovative IT services and solutions tailored to meet your unique needs.</p>
          <div className="buttons">
            <Navlink to='contact'>Connect</Navlink>
          </div>
        </div>
        <div className="home-img">
          <img src={img} alt="Home page img loaded" />
        </div>

      </div>

      <div className="info">

        <div className="div1"><h4>50+</h4>
          <p>Registered Companies</p>
        </div>

         <div className="div1"><h4>1,000+</h4>
          <p>Happy Clients</p>
        </div>

         <div className="div1"><h4>100+</h4>
          <p>Well Known Developers</p>
        </div>

         <div className="div1"><h4>24/7</h4>
          <p>Services</p>
        </div>

      </div>
      {/* End of the home page */}
      <div className="end-Section">
        <div className="end-img"></div>
        <div className="end-Content">
          <h4>We are here to help you</h4>
          <h1>Get Started Today</h1>
          <h4>Ready to take the first step towards a more efficient and secure IT infrastructure? Contact us today for a free consultation and let's discuss how <i><b>Abhay Shishodia</b></i> can help your business thrive in the digital age.</h4>

           <div className="buttons">
          <button>Connect </button>
          <button>Learn more</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Home
