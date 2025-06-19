import {lazy} from "react";
const SignUpForm = lazy(() => import("../components/Auth/Signup/SignUpForm"));

const Signup = () => {
	return (
		<div className="min-h-screen bg-bg-dark flex items-center justify-center py-12">
			<div className="bg-bg-surface-dark w-full max-w-5xl p-10 rounded-xl shadow-2xl">
				<h2 className="text-3xl font-bold text-white text-center mb-8">Create Account</h2>

				<SignUpForm />
			</div>
		</div>
	);
};

export default Signup;
