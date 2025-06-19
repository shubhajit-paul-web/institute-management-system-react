import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import checkAuthStatus from "../appwrite/utils/checkAuth";
import AlreadyLoggedIn from "../components/Auth/Login/AlreadyLoggedIn";
import LoginForm from "../components/Auth/Login/LoginForm";
import loginIllustration from "../assets/images/login-graphic-lady.svg"

const Login = () => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	const isAuthenticated = useSelector((state) => state.authReducer.status);
	
	const verify = async () => {
		if (!isAuthenticated) {
			await checkAuthStatus(dispatch);
			setLoading(false);
		}
	};

	useEffect(() => {
		verify();
	}, [dispatch]);

	if (loading) return;
	if (isAuthenticated) return <AlreadyLoggedIn />;

	return (
		<div className="h-screen flex justify-around items-center gap-10 bg-bg-dark">
			<img className="w-3/10" src={loginIllustration} alt="login illustration" />
			<LoginForm />
		</div>
	);
};

export default Login;
