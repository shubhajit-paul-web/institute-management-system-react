import {lazy} from "react";
const SignUpForm = lazy(() => import("../components/Auth/Signup/SignUpForm"));
import signupUserIllustration from "../assets/images/signup-user-illustration.svg";
import {useSelector} from "react-redux";
import AlreadyLoggedIn from "../components/Auth/Login/AlreadyLoggedIn";
import AlreadyLoggedInSkeleton from "../components/Skeletons/AlreadyLoggedInSkeleton";
import useAuthStatusSync from "../hooks/useAuthStatusSync";

const Signup = () => {
	const {loading, isAuthenticated} = useAuthStatusSync();
	const {instituteDetails} = useSelector((state) => state.authReducer);
	
	console.log(instituteDetails);
	
	
	if (loading) return <AlreadyLoggedInSkeleton />;
	if (isAuthenticated) return <AlreadyLoggedIn emailId={instituteDetails?.EmailAddress} />;

	console.log(isAuthenticated);

	return (
		<div className="relative min-h-screen bg-bg-dark flex justify-around py-10 gap-15">
			<div className="max-w-5xl rounded-xl">
				<h2 className="text-3xl font-bold text-white text-center mb-8">Create Account</h2>

				<SignUpForm />
			</div>
			<div className="w-2/8 pt-30">
				<img src={signupUserIllustration} alt="" className="w-full sticky top-10" />
			</div>
		</div>
	);
};

export default Signup;
