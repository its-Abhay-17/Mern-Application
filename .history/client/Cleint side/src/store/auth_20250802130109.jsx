import { useContext } from "react";
import { createContext } from "react";

export const Authcontext= createContext()

export const AuthProvider = ({children}) =>{

    const storetokenIn =(serverToken)=>{
        return localStorage.setItem('token', serverToken)
    }

    return <Authcontext.Provider value={{storetokenIn}}>
        {children}
    </Authcontext.Provider>
}

export const useAuth =()=>{
    const authContextValue =  useContext(Authcontext) 

    return authContextValue
}