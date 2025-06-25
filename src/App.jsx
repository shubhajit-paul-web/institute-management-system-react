import PageLoader from "./components/Skeletons/PageLoader";
import AppRoutes from "./routes/AppRoutes";
import {ToastContainer} from "react-toastify";
import useNetworkStatus from "./hooks/useNetworkStatus";
import useAuthStatusSync from "./hooks/useAuthStatusSync";
import useDynamicTitle from "./hooks/useDynamicTitle";
import OfflineMsg from "./components/OfflineMsg";

const App = () => {
	const {loading} = useAuthStatusSync(); // Checking user auth status
	const networkStatus = useNetworkStatus(); // Track user’s network status
	useDynamicTitle(); // Set page title based on current route

	if (loading) return <PageLoader />;

	return (
		<>
			{!networkStatus && <OfflineMsg />}
			<AppRoutes />
			<ToastContainer position="top-center" theme="dark" autoClose={2000} />
		</>
	);
};

export default App;
