import {useEffect, useState} from "react";
import AppRoutes from "./routes/AppRoutes";
import {ToastContainer} from "react-toastify";
import MainSkeleton from "./components/Skeletons/MainSkeleton";
import checkAuthStatus from "./appwrite/utils/checkAuth";
import {useDispatch, useSelector} from "react-redux";

const App = () => {
	// Check user is logged in or not
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	const isAuthenticated = useSelector((state) => state.authReducer.status);

	const verify = async () => {
		if (!isAuthenticated) {
			await checkAuthStatus(dispatch);
			setLoading(false);
		} else setLoading(false);
	};

	useEffect(() => {
		verify();
	}, [dispatch]);

	if (loading) return <MainSkeleton />;

	return (
		<>
			<AppRoutes />
			<ToastContainer position="top-center" theme="dark" autoClose={2000} />
		</>
	);
};

export default App;
