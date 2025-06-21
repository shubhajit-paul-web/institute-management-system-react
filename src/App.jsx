import PageLoader from "./components/Skeletons/PageLoader";
import AppRoutes from "./routes/AppRoutes";
import {ToastContainer} from "react-toastify";
import useNetworkStatus from "./hooks/useNetworkStatus";
import useAuthStatusSync from "./hooks/useAuthStatusSync";

const App = () => {
	const {loading} = useAuthStatusSync(); // Checking user auth status
	useNetworkStatus(); // Track user’s network status
	
	if (loading) return <PageLoader />;

	return (
		<>
			<AppRoutes />
			<ToastContainer position="top-center" theme="dark" autoClose={2000} />
		</>
	);
};

export default App;
