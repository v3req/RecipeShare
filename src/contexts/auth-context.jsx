import { createContext } from "react";
import { login, logout, register } from "../api/auth-api";
import usePersistedState from "../hooks/usePersistedState";
import { useNavigate } from "react-router";

export const AuthContext = createContext({
    accessToken: '',
    user: {},
    isAuthenticated: false,
    registerHandler() {},
    loginHandler()  {},
    
});


export function AuthProvider({children,}) {

    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', null)

    

    const  registerHandler = async (values) =>{
       const result = await register(values);
        
       setAuth(result);
    } 

     const  loginHandler = async (values) =>{
       const result = await login(values);
        
       setAuth(result);
       
    } 

    const logoutHandler = async () => {
        await logout(auth?.access_token);
        setAuth(null);
        navigate('/')
    }


    const contextValue = {
        accessToken: auth?.access_token,
        user: auth?.user,
        isAuthenticated: !!auth,
        registerHandler,
        loginHandler,
        logoutHandler
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}