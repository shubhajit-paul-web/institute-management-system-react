import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import checkAuthStatus from "../appwrite/utils/checkAuth";

/**
 * @function Checks if user is authenticated and updates Redux store
 * @returns {{ loading: boolean, isAuthenticated: boolean }} Auth status and loading state.
 */
const useAuthStatusSync = () => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	const isAuthenticated = useSelector((state) => state.authReducer.status);

	const verify = async () => {
		if (!isAuthenticated) {
			await checkAuthStatus(dispatch);
			setLoading(false);
		} else setLoading(false);
	};

	useEffect(() => {
		verify();
	}, [dispatch]);

	return {loading, isAuthenticated};
};

export default useAuthStatusSync;
