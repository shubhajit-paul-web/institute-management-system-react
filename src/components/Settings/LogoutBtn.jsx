import {LogOut} from "lucide-react";
import {notifySuccess} from "../../utils/ToastNotification";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";

const LogoutBtn = ({extraStyles}) => {
	const dispatch = useDispatch();

	async function handleLogout() {
		const isLoggedOut = await authService.logout(dispatch);
		if (isLoggedOut) {
			notifySuccess("Logout successfuly!");
		}
	}

	return (
		<button className={`${extraStyles} bg-red-500 hover:bg-red-500/75 text-white py-2 px-4 rounded-md shadow flex items-center gap-2`} onClick={handleLogout}>
			<LogOut size="1.2rem" /> Logout
		</button>
	);
};

export default LogoutBtn;
