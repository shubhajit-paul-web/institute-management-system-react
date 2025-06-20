import {useSelector} from "react-redux";
import AlreadyLoggedIn from "../components/Auth/Login/AlreadyLoggedIn";
import LoginForm from "../components/Auth/Login/LoginForm";
import loginIllustration from "../assets/images/login-graphic-lady.svg";

const Login = () => {
	const {status: isAuthenticated, instituteDetails} = useSelector((state) => state.authReducer);

	if (isAuthenticated) {
		return <AlreadyLoggedIn emailId={instituteDetails.EmailAddress} />;
	}

	return (
		<div className="h-screen flex justify-around items-center gap-10 bg-bg-dark">
			<img className="w-3/10" src={loginIllustration} alt="login illustration" />
			<LoginForm />
		</div>
	);
};

export default Login;
