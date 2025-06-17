import {useDispatch, useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import MainSkeleton from "../components/Skeletons/MainSkeleton";
import checkAuthStatus from "../appwrite/utils/checkAuth";

const ProtectedRoute = () => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	const isAuthenticated = useSelector((state) => state.authReducer.status);

	// authService.login({EmailAddress: "info@sheryians.com", Password: "123456789"})

	const verify = async () => {
		if (!isAuthenticated) {
			await checkAuthStatus(dispatch);
			setLoading(false);
		}
	}

	useEffect(() => {
		verify();
	}, [dispatch]);

	if (loading) {
		return <MainSkeleton />;
	}

	console.log(isAuthenticated);

	return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
