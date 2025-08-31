import React,{useContext} from 'react'
import { useAuth } from '../store/auth'


const service = () => {
  const {services} = useAuth()
  return (
    <section>
      <div className="container">
        <h1>Services</h1>
      </div>

      {
        services.map((curElem, index) => {
          const {price, description, provider, service} = curElem
          return (
          <div className="cards-container" key={index}>
            <div className="card">
              <div className="card-img"></div>
              <div className="card-details">
                <p>{provider}</p>
                <p>{price}</p>
                <h2>{service}</h2>
                <p>{description}</p>
              </div>
            </div>
          </div>
        )})}
    </section>
  )
}

export default service
