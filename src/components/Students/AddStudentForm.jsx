import {useForm} from "react-hook-form";
import {SquarePlus} from "lucide-react";
import {addStudent} from "../../features/students/studentsSlice";
import {useDispatch} from "react-redux";
import {closeModel} from "../../features/toggleModelView/toggleModelSlice";
import {message} from "antd";
import InputField from "../Auth/Signup/InputField";

const AddStudentForm = () => {
	const {register, handleSubmit, reset, errors} = useForm();
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

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 text-white rounded">
			{contextHolder}

			{/* Row 1 */}
			<InputField label="Student's Photo" type="file" register={register} name="photo" errors={errors} />
			<InputField label="Student's Name" register={register} name="studentName" errors={errors} placeholder="Enter student's name" />

			{/* Row 2 */}
			<InputField label="Father's Name" register={register} name="fatherName" errors={errors} placeholder="Enter father's name" />
			<InputField label="Mother's Name" register={register} name="motherName" errors={errors} placeholder="Enter mother's name" />

			{/* Row 3 */}
			<InputField type="select" label="Gender" register={register} name="gender" errors={errors} options={["Male", "Female", "Others"]} />
			<InputField type="date" label="DOB" register={register} name="dob" errors={errors} />

			{/* Row 4 */}
			<InputField type="select" label="Religion" register={register} name="religion" errors={errors} options={["Hindu", "Muslim", "Christian", "Jain", "Others"]} />
			<InputField type="number" label="Mobile" register={register} name="mobile" errors={errors} placeholder="Enter mobile number" />

			{/* Row 5 */}
			<InputField type="email" label="Email" register={register} name="email" errors={errors} placeholder="Enter email id" />
			<InputField type="select" label="Course" register={register} name="course" errors={errors} options={["Web Development", "Frontend Development", "Backend Development", "DSA", "System Design"]} />

			{/* Row 6 */}
			<InputField type="select" label="Batch" register={register} name="batch" errors={errors} options={["Batch A", "Batch B", "Batch C"]} />
			<InputField type="select" label="Student Type" register={register} name="studentType" errors={errors} options={["New", "Returning", "Referral"]} />

			{/* Row 7 */}
			<InputField label="Address" register={register} name="address" errors={errors} placeholder="Enter full address" />
			<InputField label="City" register={register} name="city" errors={errors} placeholder="city" />

			{/* Row 8 */}
			<InputField label="City" register={register} name="state" errors={errors} placeholder="State" />
			<InputField label="Country" register={register} name="country" errors={errors} placeholder="Country" />

			{/* Row 9 */}
			<InputField type="number" label="Pincode" register={register} name="pincode" errors={errors} placeholder="Pincode" />
			<InputField label="Previous School" register={register} name="previousSchool" placeholder="(Optional) - Name of previous school" />

			{/* Row 10 */}
			<div className="col-span-2">
				<InputField isTextArea="true" label="Extra info/note" register={register} name="extraNote" placeholder="(Optional) - Extra notes or info" />
			</div>

			{/* Submit button */}
			<div className="col-span-full mt-5">
				<button type="submit" className="transition hover:scale-[1.03] bg-orange-500/80 text-white font-medium px-6 py-3 rounded flex items-center gap-2.5">
					<SquarePlus size="1.25rem" /> Add Student
				</button>
			</div>
		</form>
	);
};

export default AddStudentForm;
