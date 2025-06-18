import {toast} from "react-toastify";

// Toast: Success
export function notifySuccess(message = "") {
	toast.success(message);
}
