import { createContext } from "react";

export const authcontext= createContext()

export const AuthProvider = ({children}) =>{
    return <AuthProvider.authcontext>
        {children}
    </AuthProvider.authcontext>
}