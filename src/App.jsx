import AppRoutes from "./routes/AppRoutes";
import {ToastContainer} from "react-toastify";

const App = () => {
	return (
		<>
			<AppRoutes />
			<ToastContainer position="top-center" theme="dark" autoClose={2000} />
		</>
	);
};

export default App;
