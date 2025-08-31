import React, { useState, useEffect } from 'react'
import '../components/layouts/layout.css'
import { useAuth } from '../store/auth'
import {Link} from 'react-router-dom'

const Adminuser = () => {
  const [users, setusers] = useState([])

  const { Authorization_Token } = useAuth()
  const getAllusersdata = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: Authorization_Token
        }
      })
      const data = await response.json()
      console.log(data)
      setusers(data)
    } catch (error) {
      console.log(error)
    }
  }

  const Deleteuser = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: Authorization_Token
        }
      })
      const data = await response.json()
      console.log(`users after delete ${data}`)
      if (response.ok) {
        getAllusersdata()
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllusersdata()
  }, [])

  return (
    <div className="users-table-container">
      <h2>All Users</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((curUser, index) => (
            <tr key={index}>
              <td>{curUser.username}</td>
              <td>{curUser.email}</td>
              <td>{curUser.phoneNumber}</td>
              <td>
                <button className="edit-btn" ></button>
              </td>
              <td>
                <button className="delete-btn" onClick={() => Deleteuser(curUser._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Adminuser
