import { NavLink } from "react-router-dom"

const ERROR = () => {
  return (
    <div>
     <div className="error">
        <h1> 404</h1>
        <h3>SORRY! PAGE NOT FOUND</h3>
        <p>Oops! It seems like the page you're trying to access doesn't exist. If you believe there's an issue, feel free to report it, and we'll look into it.</p>
        <div className="btns">
          <Navlink to='/'></Navlink>
          <Navlink to='/contact'></Navlink>
        </div>
     </div>
    </div>
  )
}

export default ERROR 

