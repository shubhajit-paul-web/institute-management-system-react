import {Link, useNavigate} from "react-router-dom";
import InputField from "../../FormUtils/InputField";
import {KeyRound, Mail} from "lucide-react";
import {useForm} from "react-hook-form";
import {useRef, useState} from "react";
import authService from "../../../appwrite/auth";
import {useDispatch} from "react-redux";
import {emailRegex} from "../../../utils/RegexPatterns";
import {Button} from "antd";
import checkAuthStatus from "../../../appwrite/utils/checkAuth"

const LoginForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [errorMsg, setErrorMsg] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const EmailAddress = useRef(null);
	const Password = useRef(null);

	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm();

	async function loginHandler(data) {
		try {
			setErrorMsg("");
			setIsSubmitting(true);
			await authService.login(data);
			await checkAuthStatus(dispatch);

			navigate("/");
		} catch (error) {
			setErrorMsg(error.message);
			setIsSubmitting(false);
		}
	}

	return (
		<div className="w-2/8 min-w-[26rem] dark:bg-bg-surface-dark px-8 py-9 rounded-xl dark:text-white/85 border dark:border-white/10">
			<div className="text-center">
				<h1 className="text-[1.6rem] font-semibold mb-2">Welcome Back!</h1>
				<p className="leading-tight text-base text-white/60">We're happy to see you again. Please log in to your account.</p>
			</div>

			{/* form */}
			<form className="w-full mt-12" onSubmit={handleSubmit(loginHandler)}>
				<InputField
					inputType="text"
					icon={<Mail size="1.2rem" />}
					placeholder="Email"
					ref={EmailAddress}
					{...register("EmailAddress", {
						required: "Email is required",
						validate: {
							matchPattern: (value) => emailRegex.test(value) || "Email address must be a valid address.",
						},
					})}
				/>
				{errors.EmailAddress && <p className="text-red-600/85 text-base">This field is required</p>}

				<InputField inputType="password" icon={<KeyRound size="1.2rem" />} ref={Password} placeholder="Password" {...register("Password", {required: "Password is required"})} className="mt-4" />
				{errors.Password && <p className="text-red-600/85 text-base">This field is required</p>}

				<div className="text-right font-semibold text-orange-400 mt-2">
					<Link to="/forgot-password" className="hover:underline">
						Forgot Password?
					</Link>
				</div>
				{/* error message from Appwrite */}
				{errorMsg && <p className="text-base text-red-400">{errorMsg}</p>}

				<Button htmlType="submit" type="primary" block iconPosition="end" size="large" className="mt-5 hover:opacity-85" style={{backgroundColor: "#BD510A"}} loading={isSubmitting}>
					Login
				</Button>
			</form>
			<p className="text-lg text-center mt-8">
				Don’t have an account?{" "}
				<Link to="/signup" className="font-semibold text-orange-400 hover:underline">
					Register
				</Link>
			</p>
		</div>
	);
};

export default LoginForm;
