import authService from "../auth";
import {logout} from "../../features/auth/authSlice";

const checkAuthStatus = async (dispatch) => {
	try {
		const userData = await authService.getCurrentAccount();
		
		if (userData) {
			await authService.fetchInstituteInfo(userData.$id, dispatch);
		} else dispatch(logout());
	} catch (error) {
		dispatch(logout());
		console.error("User not authenticated", error);
	}
};

export default checkAuthStatus;
