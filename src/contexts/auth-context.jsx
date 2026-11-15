import { createContext } from "react";
import { login, logout, register } from "../api/auth-api";
import usePersistedState from "../hooks/usePersistedState";

export const AuthContext = createContext({
    accessToken: '',
    user: {},
    isAuthenticated: false,
    registerHandler() {},
    loginHandler()  {},
    
});


export function AuthProvider({children,}) {


    const [auth, setAuth] = usePersistedState('auth', null)

    const  registerHandler = async (values) =>{
       const result = await register(values);
        
       setAuth(result);
    } 

     const  loginHandler = async (values) =>{
       const result = await login(values);
        
       setAuth(result);
    } 

    const logutHandler = async () => {
        await logout(auth?.access_token);
        setAuth(null);
    }


    const contextValue = {
        accessToken: auth?.access_token,
        user: auth?.user,
        isAuthenticated: !!auth,
        registerHandler,
        loginHandler,
        logutHandler
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}