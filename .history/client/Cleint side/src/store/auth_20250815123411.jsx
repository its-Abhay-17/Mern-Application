import { useContext, useState, createContext, useEffect } from "react";

export const Authcontext = createContext()

export const AuthProvider = ({ children }) => {

    const [token, settoken] = useState(localStorage.getItem("token"))
    const [userr, setuserr] = useState(null)

    const storetokenIn = (serverToken) => {
        return localStorage.setItem('token', serverToken)
    }

    let isLoggedIn = !!token
    console.log("Is logged In", isLoggedIn)

    //Log out functionality
    const LogoutUser = () => {
        settoken('')
        return localStorage.removeItem("token")
    }

    // JWT AUTHENTICATION (auto-fill)


    return <Authcontext.Provider value={{ isLoggedIn, storetokenIn, LogoutUser }}>
        {children}
    </Authcontext.Provider>
}

export const useAuth = () => {
    const authContextValue = useContext(Authcontext)

    return authContextValue
}