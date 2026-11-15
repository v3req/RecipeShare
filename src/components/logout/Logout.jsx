import { Navigate, } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";


export default function Logout() {


    const  { logoutHandler } = useAuth();

    
    useEffect(() => {
        logoutHandler();
    }, [logoutHandler]);

    return (
        <Navigate to="/" />
    );

}
    