import { Navigate, Outlet } from "react-router-dom";
import {UseUserContext} from "../Context/AuthContext"

export const ClientRoute = () => {

    const { user } = UseUserContext();

    return user ? <Outlet/>:<Navigate to="/delivery"/>
        
    
}
