import { Navigate, Outlet } from "react-router-dom";


const RequireAuth = ({ allowedRoles }) => {
    const user = JSON.parse(localStorage.getItem('profile'))
    return (
        user
            ? <Outlet />
            : <Navigate to="/"  />
    );
}

export default RequireAuth;