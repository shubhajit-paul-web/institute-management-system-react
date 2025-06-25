import {useEffect, useState} from "react";
import {notifySuccess} from "../utils/ToastNotification";

/**
 * @function Track user’s network status
 * @returns Network Status
 */
const useNetworkStatus = () => {
	const [networkStatus, setNetworkStatus] = useState(true);

	useEffect(() => {
		window.addEventListener("online", () => {
			notifySuccess("You're connected again!");
			setNetworkStatus(true);
		});
		window.addEventListener("offline", () => {
			setNetworkStatus(false);
		});

		return () => {
			window.removeEventListener("online");
			window.removeEventListener("offline");
		};
	}, []);

	return networkStatus;
};

export default useNetworkStatus;
