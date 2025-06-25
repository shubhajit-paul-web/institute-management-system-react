import {useForm} from "react-hook-form";
import {UserRoundPlus} from "lucide-react";
import {useDispatch, useSelector} from "react-redux";
import {closeModel} from "../../features/toggleModelView/toggleModelSlice";
import {Button} from "antd";
import InputField from "../InputField";
import studentsService from "../../appwrite/services/studentsService";
import {nanoid} from "@reduxjs/toolkit";
import {useState} from "react";
import {notifyError, notifySuccess} from "../../utils/ToastNotification";
import {addStudent} from "../../features/students/studentsSlice";

const AddStudentForm = () => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const [appwriteError, setAppwriteError] = useState("");
	const instituteID = useSelector((state) => state.authReducer.instituteDetails?.$id);

	const {
		register,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm();

	async function uploadStudent(studentData) {
		setAppwriteError("");
		setLoading(true);

		try {
			const createdStudent = await studentsService.addStudent({
				instituteID,
				studentId: nanoid(10),
				admissionDate: Date.now(),
				...studentData,
				photo: studentData.photo[0],
			});

			if (createdStudent) {
				dispatch(addStudent(createdStudent));

				notifySuccess(`Admission successful for ${studentData?.studentName}`);
				dispatch(closeModel());
				reset(); // clear all the input fields
			}
		} catch (error) {
			notifyError("Something went wrong.");
			setAppwriteError(error.message);
		} finally {
			setLoading(false);
		}
	}

	return (
		<form onSubmit={handleSubmit(uploadStudent)} className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 text-white rounded">
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
			<InputField label="Full Address" register={register} name="fullAddress" errors={errors} placeholder="Enter full address" />
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

			{/* Appwrite Error message */}
			<p className="col-span-2 text-red-500/85">{appwriteError}</p>

			{/* Submit button */}
			<Button loading={loading} htmlType="submit" type="primary" size="large" icon={<UserRoundPlus size="1.05rem" />} className="mt-8 w-full py-3 rounded-md font-bold hover:opacity-85" style={{width: "10rem", backgroundColor: "#e36a08", padding: "25px 30px"}}>
				Add Student
			</Button>
		</form>
	);
};

export default AddStudentForm;
