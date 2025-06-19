import {lazy, useState} from "react";
import authService from "../../../appwrite/auth";
import {login} from "../../../features/auth/authSlice";
import {useForm} from "react-hook-form";
import {Button} from "antd";
import {KeySquare} from "lucide-react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {notifyError} from "../../../utils/ToastNotification.js";
const InputField = lazy(() => import("./InputField"));

const SignUpForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm();

	const signupHandler = async (data) => {
		try {
			setLoading(true);

			const userAccount = await authService.createAccount({
				...data,
				Logo: data.Logo[0],
			});

			if (userAccount) {
				console.log(userAccount);
				
				reset(); // cleanup signup form
				dispatch(login(userAccount));
				navigate("/");
			}

			setLoading(false);
		} catch (error) {
			notifyError(error.message);
		}
	};

	return (
		<form onSubmit={handleSubmit(signupHandler)} className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-bg-dark py-8 rounded-lg shadow-lg">
			{/* Left Column */}
			<div className="space-y-6">
				<h2 className="text-2xl font-semibold text-white mb-4">Institute Information</h2>

				<InputField label="Email Address" type="email" placeholder="Enter your email address" register={register} name="EmailAddress" errors={errors} />

				<InputField label="Password (Min 8 characters)" type="password" placeholder="Enter your password" register={register} name="Password" errors={errors} />

				<InputField label="Institute Name" type="text" placeholder="Enter your Institute's name" register={register} name="InstituteName" errors={errors} />

				<InputField label="Registration Number" type="text" placeholder="Enter your registration number" register={register} name="RegistrationNumber" errors={errors} />

				<InputField label="Type" type="select" register={register} name="Type" errors={errors} placeholder="Select Type" options={["University", "College", "Institute"]} />

				<InputField label="Logo" type="file" placeholder="Upload your institute logo" register={register} name="Logo" errors={errors} />

				{/* image/logo preview */}
				<div className="hidden">
					<p className="text-sm font-medium text-white/80 mb-2">Logo Preview</p>
					<div className="w-[5rem] aspect-square rounded-xl p-2.5 flex justify-center items-center flex-col bg-white/10">
						<img src="https://ik.imagekit.io/sheryians/Sheryians_logo_EzwgcppnD" alt="Logo Preview" className="w-3/5" />
					</div>
				</div>

				<InputField label="About" isTextArea={true} placeholder="Tell us about your institute" register={register} name="About" errors={errors} />

				{/* Signup button */}
				<Button htmlType="submit" type="primary" size="large" icon={<KeySquare size="1.05rem" />} className="mt-8 w-full py-3 rounded-md font-bold hover:opacity-85" loading={loading} style={{backgroundColor: "#e36a08", padding: "22px 30px"}}>
					Sign Up
				</Button>
			</div>

			{/* Right Column */}
			<div className="space-y-6">
				<h2 className="text-2xl font-semibold text-white mb-4">Location & Contact</h2>

				<InputField label="Established Year" type="number" placeholder="Year of establishment" register={register} name="EstablishedYear" errors={errors} />

				<InputField label="Address" type="text" placeholder="Enter your institute's address" register={register} name="Address" errors={errors} />

				<InputField label="City" type="text" placeholder="Enter your city" register={register} name="City" errors={errors} />

				<InputField label="State" type="text" placeholder="Enter your state" register={register} name="State" errors={errors} />

				<InputField label="Pincode" type="text" placeholder="Enter your pincode" register={register} name="Pincode" errors={errors} />

				<InputField label="Country" type="text" placeholder="Enter your country" register={register} name="Country" errors={errors} />

				<InputField label="Phone Number" type="tel" placeholder="Enter your phone number" register={register} name="PhoneNumber" errors={errors} />

				<InputField label="Official Website (Optional)" type="url" placeholder="(Optional) Enter your official website URL" register={register} name="OfficialWebsite" />
			</div>
		</form>
	);
};

export default SignUpForm;
