import { useContext, useState, createContext, useEffect } from "react";

export const Authcontext = createContext()

export const AuthProvider = ({ children }) => {

    const [token, settoken] = useState(localStorage.getItem("token"))
    const [userr, setuserr] = useState("")

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


    // JWTTOKEN AUTHENTICATION
    const userAuthentication =async()=>{
        try {
            const response = await fetch(`http://localhost:3000/api/auth/user`,{
                method:"GET",
                headers:{
                    Authorization:token
                }
            });

            if (response.ok) {
                const data = await response.json();
                console.log("user data ",data.userData)
                setuserr(data.userData)

            }
        } catch (error) {
            console.error("Error fetching in auth.jsx")
        }
    }

    useEffect(() => {
    userAuthentication()
    }, [])
    return <Authcontext.Provider value={{ isLoggedIn, storetokenIn, LogoutUser, userr }}>
        {children}
    </Authcontext.Provider>
}

export const useAuth = () => {
    const authContextValue = useContext(Authcontext)

    return authContextValue
}