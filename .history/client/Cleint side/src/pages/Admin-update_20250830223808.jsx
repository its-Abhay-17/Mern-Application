import React from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../store/auth'

const handleInput =()=>{

}
const Adminupdate = () => {
    const [data, setdata] = useState({
    username:"",
    email:"",
    phoneNumber:""
})
const params = useParams()
const Authorization_Token = useAuth()
  const GetSingleUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/admin/users/delete/${params.id}`, {
        method: "GET",
        headers: {
          Authorization: Authorization_Token
        }
      })
      const data = await response.json()
      console.log(`users single data ${data}`)
      setdata(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
  GetSingleUser()
  }, [input])
    return (
        <div>
            <div className="ContactUs"><h1>Contact Us</h1></div>
            <div className="home-parent Contact-Page">
                <div className="home img-contact"></div>
                <div className="home-img content-Contact">

                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        placeholder='Username'
                        name='username'
                        id='username'
                        required
                        autoComplete='off'
                        value={data.username}
                        onChange={handleInput}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        placeholder='Email'
                        name='email'
                        id='email'
                        required
                        autoComplete='off'
                        value={data.email}
                        onChange={handleInput}
                    />
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="number" placeholder='phone Number' name='phoneNumber' id='phoneNumber' required autoComplete='off' value={user.phoneNumber} onChange={handleInput} />

                    <div>
                        <button className="btn" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adminupdate
