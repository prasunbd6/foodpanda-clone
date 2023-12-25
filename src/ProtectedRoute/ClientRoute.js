import { Navigate, Outlet } from "react-router-dom";
import { useUserAuthContext } from "../Context/AuthContext"

export const ClientRoute = () => {

    const { user } = useUserAuthContext();

    return user ? <Outlet /> : <Navigate to="/error" />


}
