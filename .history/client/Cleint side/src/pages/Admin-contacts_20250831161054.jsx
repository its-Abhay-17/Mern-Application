import React,{useState,useEffect} from 'react'
import '../components/layouts/layout.css'
import { useAuth } from '../store/auth'
import {Link} from 'react-router-dom'


const Admincontacts = () => {
  const [users, setusers] = useState([])
  const {Authorization_Token} = useAuth()
  // HERE DISPLAY ALL USERS WHO CONTACTS ME

  const getAllContactsdata = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/admin/contacts`, {
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

  //here the code for delete contact 

    const DeleteContacts = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: Authorization_Token
        }
      })
      const data = await response.json()
      console.log(`users after delete ${data}`)
      if (response.ok) {
        getAllContactsdata()
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllContactsdata()
  }, [])


  return (
       <div className="users-table-container"> 
      <h2>All Contacts</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((curUser, index) => (
            <tr key={index}>
              <td>{curUser.username}</td>
              <td>{curUser.email}</td>
              <td>{curUser.message}</td>

              <td>
                <button className="delete-btn" onClick={() => DeleteContacts(curUser._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Admincontacts
