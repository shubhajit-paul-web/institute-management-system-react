import authService from "../auth";
import { login, logout } from "../../features/auth/authSlice";

const checkAuthStatus = async (dispatch) => {
	try {
		const userData = await authService.getCurrentAccount();

		if (userData) dispatch(login(userData));
		else dispatch(logout());
	} catch (error) {
		dispatch(logout());
		console.error("User not authenticated", error);
	}
};

export default checkAuthStatus;