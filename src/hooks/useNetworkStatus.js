import {useEffect} from "react";
import { notifyError, notifySuccess } from "../utils/ToastNotification";

const useNetworkStatus = () => {
	useEffect(() => {
		window.addEventListener("online", () => {
            notifySuccess("You're connected again!");
		});
		window.addEventListener("offline", () => {
            notifyError("You’re offline.");
		});

		return () => {
			window.removeEventListener("online");
			window.removeEventListener("offline");
		};
	}, []);
};

export default useNetworkStatus;
