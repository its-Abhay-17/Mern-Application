import React from 'react'
import { useAuth } from '../store/auth'
import img from './images/img.png'

const Services = () => {
  const { Services } = useAuth()

  return (
    <section>
      <div className="container">
        <h1>Services</h1>
      </div>

      <div className="cards-container"> 
        {Services && Services.map((curElem, index) => {
          const { price, description, provider, service } = curElem
          return (
            <div className="card" key={index}>
              <div className="card-img">
                <img src={img} alt="service" />
              </div>
              <div className="card-details">
                <div className="short-details">
                  <p>{provider}</p>
                  <p>{price}</p>
                </div>
                <h2>{service}</h2>
                <p>{description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
