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

      {
      Services && Services.map((curElem, index) => {
        const { price, description, provider, service } = curElem
        return (
          <div className="cards-container" key={index}>
            <div className="card">
              <div className="card-img"><img src={img} alt="here a image related to our web page" /></div>
              <div className="card-details">
                <div className="short-details">
                  <p>{provider}</p>
                <p>{price}</p>
                </div>
                <h2>{service}</h2>
                <p>{description}</p>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Services
