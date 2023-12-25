import { Navigate, Outlet } from "react-router-dom";
import { useUserAuthContext } from "../Context/AuthContext"
import Error from "../Components/Error";

const ClientRoute = () => {

    const { user } = useUserAuthContext();

    return user ? <Outlet /> : <Navigate to="*" element={<Error/>} />


}

export default ClientRoute;
