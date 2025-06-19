import {LogOut} from "lucide-react";
import {notifySuccess} from "../../utils/ToastNotification";
import authService from "../../appwrite/auth";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {Button} from "antd";

const LogoutBtn = ({extraStyles}) => {
	const dispatch = useDispatch();
	const [isBtnClicked, setIsBtnClicked] = useState(false);

	async function handleLogout() {
		setIsBtnClicked(true);
		const isLoggedOut = await authService.logout(dispatch);
		if (isLoggedOut) {
			notifySuccess("Logout successfuly!");
		}
	}

	return (
		<Button type="primary" size="large" icon={<LogOut size="1.1rem" />} style={{backgroundColor: "#C02630"}} className={extraStyles + " hover:opacity-85"} loading={isBtnClicked} onClick={handleLogout}>
			Logout
		</Button>
	);
};

export default LogoutBtn;
