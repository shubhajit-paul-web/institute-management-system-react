import {useForm} from "react-hook-form";
import InputWrapper from "../FormUtils/InputWrapper";
import {SquarePlus} from "lucide-react";
import {addStudent} from "../../features/students/studentsSlice";
import {useDispatch} from "react-redux";
import {closeModel} from "../../features/toggleModelView/toggleModelSlice";
import {message} from "antd";

const AddStudentForm = () => {
	const {register, handleSubmit, reset} = useForm();
	const [messageApi, contextHolder] = message.useMessage();
	const dispatch = useDispatch();

	function onSubmit(data) {
		let imgFile = data?.photo[0];
		const reader = new FileReader();

		reader.onloadend = () => {
			const studentData = {
				admissionDate: Date.now(),
				...data,
				photo: reader.result,
			};

			dispatch(addStudent(studentData));

			console.log(studentData);

			// Admission success message
			messageApi.open({
				type: "success",
				content: `Admission successful for ${data?.studentName}`,
			});

			dispatch(closeModel());
			reset(); // clear all the input fields
		};

		if (imgFile) {
			reader.readAsDataURL(imgFile);
		}
	}

	const inputStyles = "dark:bg-gray-800 border dark:border-gray-600 text-white rounded px-3.5 py-2.5 w-full focus:outline-3 focus:outline-rose-400";

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 text-white rounded">
			{contextHolder}

			<InputWrapper name="Student's Photo" required>
				<input
					type="file"
					accept="image/*"
					{...register("photo", {required: true})}
					className="w-full block text-sm text-gray-300
               file:mr-4 file:py-1 file:px-3
               file:rounded file:border-0
               file:text-sm file:font-semibold
               file:bg-rose-400 file:text-white
               hover:file:bg-rose-500
               dark:bg-gray-800 dark:border dark:border-gray-600
               rounded px-3 py-2"
				/>
			</InputWrapper>

			<InputWrapper name="Student's Name" required>
				<input {...register("studentName", {required: true})} className={inputStyles} placeholder="Enter student's name" />
			</InputWrapper>

			<InputWrapper name="Father's Name" required>
				<input {...register("fatherName", {required: true})} className={inputStyles} placeholder="Enter father's name" />
			</InputWrapper>

			<InputWrapper name="Mother's Name" required>
				<input {...register("motherName", {required: true})} className={inputStyles} placeholder="Enter mother's name" />
			</InputWrapper>

			<InputWrapper name="Gender" required>
				<select {...register("gender", {required: true})} className={inputStyles}>
					<option value="" selected disabled>
						Select Gender
					</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
					<option value="other">Other</option>
				</select>
			</InputWrapper>

			<InputWrapper name="DOB" required>
				<input type="date" {...register("dob", {required: true})} className={inputStyles} />
			</InputWrapper>

			<InputWrapper name="Religion" required>
				<select {...register("religion", {required: true})} className={inputStyles}>
					<option value="" selected disabled>
						Select Religion
					</option>
					<option value="hindu">Hindu</option>
					<option value="muslim">Muslim</option>
					<option value="christian">Christian</option>
					<option value="jain">Jain</option>
					<option value="other">Other</option>
				</select>
			</InputWrapper>

			<InputWrapper name="Mobile" required>
				<input type="number" {...register("mobile", {required: true})} className={inputStyles} placeholder="Enter mobile number" />
			</InputWrapper>

			<InputWrapper name="Email" required>
				<input type="email" {...register("email", {required: true})} className={inputStyles} placeholder="Enter email id" />
			</InputWrapper>

			<InputWrapper name="Course" required>
				<select {...register("course", {required: true})} className={inputStyles}>
					<option value="" selected disabled>
						Select Course
					</option>
					<option value="web_dev">Web Development</option>
					<option value="python_basics">Python Basics</option>
					<option value="design_uiux">UI/UX Design</option>
				</select>
			</InputWrapper>

			<InputWrapper name="Batch" required>
				<select {...register("batch", {required: true})} className={inputStyles}>
					<option value="" selected disabled>
						Select Batch
					</option>
					<option value="Batch A">Batch A</option>
					<option value="Batch A">Batch B</option>
					<option value="Batch A">Batch C</option>
				</select>
			</InputWrapper>

			<InputWrapper name="Student Type" required>
				<select {...register("studentType", {required: true})} className={inputStyles}>
					<option value="" selected disabled>
						Select Student Type
					</option>
					<option value="New">New</option>
					<option value="Returning">Returning</option>
					<option value="Referral">Referral</option>
				</select>
			</InputWrapper>

			<InputWrapper name="Address" required>
				<input {...register("address", {required: true})} className={inputStyles} placeholder="Enter full address" />
			</InputWrapper>

			<InputWrapper name="City" required>
				<input {...register("city", {required: true})} className={inputStyles} placeholder="City" />
			</InputWrapper>

			<InputWrapper name="State" required>
				<input {...register("state", {required: true})} className={inputStyles} placeholder="State" />
			</InputWrapper>

			<InputWrapper name="Country" required>
				<input {...register("country", {required: true})} className={inputStyles} placeholder="Country" />
			</InputWrapper>

			<InputWrapper name="Pincode" required>
				<input type="number" {...register("pincode", {required: true})} className={inputStyles} placeholder="Pincode" />
			</InputWrapper>

			<InputWrapper name="Previous School">
				<input {...register("previousSchool")} className={inputStyles} placeholder="(Optional) - Name of previous school" />
			</InputWrapper>

			<div className="col-span-2">
				<InputWrapper name="Extra info/note">
					<textarea {...register("extraNote")} className={`${inputStyles} h-[10rem]`} placeholder="(Optional) - Extra notes or info" />
				</InputWrapper>
			</div>

			<div className="col-span-full mt-5">
				<button type="submit" className="transition hover:scale-[1.03] bg-blue-500/80 text-white font-medium px-6 py-3 rounded flex items-center gap-2.5">
					<SquarePlus size="1.25rem" /> Add Student
				</button>
			</div>
		</form>
	);
};

export default AddStudentForm;
