import {Navigate, Outlet} from "react-router-dom";
import useAuthStatusSync from "../hooks/useAuthStatusSync";

const ProtectedRoute = () => {
	const {isAuthenticated} = useAuthStatusSync();

	return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
