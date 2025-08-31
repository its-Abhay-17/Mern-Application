import { useContext,useState,createContext,useEffect } from "react";

export const Authcontext= createContext()

export const AuthProvider = ({children}) =>{

    const [token, settoken] = useState(localStorage.getItem("token"))
    const [userAuth, setuserAuth] = useState()

    const storetokenIn =(serverToken)=>{
        return localStorage.setItem('token', serverToken)
    }

    let isLoggedIn = !!token
    console.log("Is logged In", isLoggedIn)

    // JWTTOKEN AUTHENTICATION

    const userAuthentication =async ()=>{
        try {
            const response = await fetch(`http://localhost:3000/api/auth/user`,{
                method:"GET",
                headers:
                {Authorization:{token}
            },
            })

            if (response.ok) {
                const data = await response.json()
                console.log(data)
                setuserAuth(data)
            }
        } catch (error) {
            console.log(error,"This error from jwt token")
        }
        setuserAuth("")
    }

    useEffect(() => {
    userAuthentication()
    }, [])

    //Log out func
    const LogoutUser = ()=>{
        settoken('')
        return localStorage.removeItem("token")
    }

    return <Authcontext.Provider value={{isLoggedIn,storetokenIn,LogoutUser,userAuth}}>
        {children}
    </Authcontext.Provider>
}

export const useAuth =()=>{
    const authContextValue =  useContext(Authcontext) 

    return authContextValue
}