// import React from 'react'
import './page.css'
import img from './images/img.png'
const Home = () => {
  return (
    <div>
      <div className="home-parent">
        <div className=" home">
          <h3>We are the World Best IT Company</h3>
          <h1>Welcome to my Portfolio</h1>
          <p>Are you ready to take your business to the next level with cutting-edge IT solutions? Look no further! At Thapa Technical, we specialize in providing innovative IT services and solutions tailored to meet your unique needs.</p>
          <div className="buttons">
          <button>Connect </button>
          <button>Learn more</button>
          </div>
        </div>
        <div className="home-img">
          <img src={img} alt="Home page img loaded" />
        </div>

      </div>

      <div className="info">

        <div className="div1">500
          <p>I am a Peveloper</p>
        </div>

         <div className="div1">500
          <p>I am a Peveloper</p>
        </div>

         <div className="div1">500
          <p>I am a Peveloper</p>
        </div>

         <div className="div1">500
          <p>I am a Peveloper</p>
        </div>
        
      </div>
    </div>
  )
}

export default Home
