import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store/auth'


const Logout = () => {
    const Navigate = useNavigate()
    const { LogoutUser } = useAuth()

    useEffect(() => {
        LogoutUser()
    }, [LogoutUser])

    return Navigate("/login")

}

export default Logout
