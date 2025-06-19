import React from "react";
import {useForm} from "react-hook-form";
import InputField from "./InputField"; // Import the reusable InputField component
import { Button } from "antd";
import { KeySquare } from "lucide-react";

const SignUpForm = () => {
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm();

	const signupHandler = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(signupHandler)} className="grid grid-cols-1 md:grid-cols-2 gap-8">
			{/* Left Column */}
			<div className="space-y-6">
				<InputField label="Email Address" type="email" placeholder="Enter your email address" register={register} name="EmailAddress" errors={errors} />

				<InputField label="Password" type="password" placeholder="Enter your password" register={register} name="Password" errors={errors} />

				<InputField label="Institute Name" type="text" placeholder="Enter your Institute's name" register={register} name="InstituteName" errors={errors} />

				<InputField label="Registration Number" type="text" placeholder="Enter your registration number" register={register} name="RegistrationNumber" errors={errors} />

				<InputField label="Logo" type="file" placeholder="Upload your institute logo" register={register} name="Logo" errors={errors} />

				<InputField label="About" isTextArea={true} placeholder="Tell us about your institute" register={register} name="About" errors={errors} />

        {/* Submit button */}
        <Button htmlType="submit" type="primary" size="large" icon={<KeySquare size="1.05rem" />} className="mt-8" style={{backgroundColor: "#A4490E", padding: "22px 30px"}}>Sign Up</Button>
			</div>

			{/* Right Column */}
			<div className="space-y-6">
				<InputField label="Type" type="select" register={register} name="Type" errors={errors} placeholder="Select Type" options={["University", "College", "Institute"]} />

				<InputField label="Established Year" type="number" placeholder="Year of establishment" register={register} name="EstablishedYear" errors={errors} />

				<InputField label="Address" type="text" placeholder="Enter your institute's address" register={register} name="Address" errors={errors} />

				<InputField label="City" type="text" placeholder="Enter your city" register={register} name="City" errors={errors} />

				<InputField label="State" type="text" placeholder="Enter your state" register={register} name="State" errors={errors} />

				<InputField label="Pincode" type="text" placeholder="Enter your pincode" register={register} name="Pincode" errors={errors} />

				<InputField label="Country" type="text" placeholder="Enter your country" register={register} name="Country" errors={errors} />

				<InputField label="Phone Number" type="tel" placeholder="Enter your phone number" register={register} name="PhoneNumber" errors={errors} />

				<InputField label="Official Website" type="url" placeholder="Enter your official website URL" register={register} name="OfficialWebsite" errors={errors} />
			</div>
		</form>
	);
};

export default SignUpForm;
