import { useContext, useState, createContext, useEffect } from "react";

export const Authcontext = createContext()

export const AuthProvider = ({ children }) => {

    const [token, settoken] = useState(localStorage.getItem("token"))
    settoken(storetokenIn)
    const [userr, setuserr] = useState()
    const [Services, setServices] = useState()

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

    const userAuthentication = async()=>{
        try {
            const response = await fetch(`http://localhost:3000/api/auth/user`,{
                method:"GET",
                headers:{
                    Authorization:{token}
                }
            })

            if (response.ok) {
               const Data = await response.json() 
               console.log('user data' , Data.UserData)
               setuserr(Data.UserData)
            }
        } catch (error) {
            console.log(error,"THis error rise from auth.jsx")
        }
    }

    // to fetch the services from backend

    const userServices = async() =>{
       try {
         const response = await fetch(`http://localhost:3000/api/data/service`,{
            method:"GET"
        });

        if (response.ok) {
            const data = await response.json()
            console.log(data.msg)
            setServices(data.msg)
        }
       } catch (error) {
        console.log("the error from frontend auth.jsx", error)
       }
    }
    useEffect(() => {
        userServices()
    userAuthentication()
    }, [])

    return <Authcontext.Provider value={{ isLoggedIn, storetokenIn, LogoutUser, userr, Services }}>
        {children}
    </Authcontext.Provider>
}

export const useAuth = () => {
    const authContextValue = useContext(Authcontext)

    return authContextValue
}