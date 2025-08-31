import React,{useState,useEffect} from 'react'
import '../components/layouts/layout.css'
import { useAuth } from '../store/auth'


const Adminuser = () => {
  const [users, setusers] = useState([])
  
  const AuthorizationToken = useAuth()
const getAllusersdata = async () => { 
  try {
    const response = await fetch(`http://localhost:3000/api/admin/users`, {
      method: "GET",
      headers: {
        Authorization: AuthorizationToken
      }
    })
    const data = await response.json()
    console.log(data)
    setusers(data)
  } catch (error) {
    console.log(error)
  }
}

useEffect(() => {
  getAllusersdata
}, [])

  return (
    <div className="users">
      Hii, boss these are users
    </div>
  )
}

export default Adminuser
