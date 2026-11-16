import { createContext, useEffect } from "react";
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
        setAuth(null);
        await logout(auth?.access_token);
        
        navigate('/')
    }


    useEffect(() => {
    if (!auth?.expires_at) return;

    const remainingTime = auth.expires_at * 1000 - Date.now();

    if (remainingTime <= 0) {
        setAuth(null);
        return;
    }

    const timer = setTimeout(() => {
        setAuth(null);
    }, remainingTime);

    return () => clearTimeout(timer);
        }, [auth, setAuth]);

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