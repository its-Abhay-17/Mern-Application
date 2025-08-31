import React,{useState,useEffect} from 'react'
import '../components/layouts/layout.css'


const Admincontacts = () => {


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

  useEffect(() => {
    getAllContactsdata()
  }, [])


  return (
       <div className="users-table-container"> 
      <h2>All Users</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Update</th>
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
                <button className="edit-btn"><Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link></button>
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

export default Admincontacts
