import { useContext } from "react";
import { createContext } from "react"; 

export const Authcontext= createContext()

export const AuthProvider = ({children}) =>{

    const [token, settoken] = useState(localStorage.getItem("token"))

    const storetokenIn =(serverToken)=>{
        return localStorage.setItem('token', serverToken)
    }
    //Log out func

    const LogoutUser = ()=>{
        settoken('')
        return localStorage.removeItem("token")
    }

    return <Authcontext.Provider value={{storetokenIn}}>
        {children}
    </Authcontext.Provider>
}

export const useAuth =()=>{
    const authContextValue =  useContext(Authcontext) 

    return authContextValue
}