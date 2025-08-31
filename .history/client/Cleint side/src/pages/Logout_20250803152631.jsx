import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store/auth'

const Navigate = useNavigate()

const Logout = () => {
    const { LogoutUser } = useAuth()

    useEffect(() => {
        LogoutUser()
    }, [LogoutUser])

    return Navigate("/login")

}

export default Logout
