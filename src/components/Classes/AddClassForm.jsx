import {useForm} from "react-hook-form";
import InputField from "../InputField";
import {Button} from "antd";
import {UserRoundPlus} from "lucide-react";
import FormSubmitBtn from "../FormSubmitBtn";

const AddClassForm = () => {
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm();

	function addClassData(classData) {
		console.log(classData);
	}

	return (
		<form onSubmit={handleSubmit(addClassData)} className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 text-white rounded">
			{/* Row 1 */}
			<InputField label="Class / Topic Title" name="className" placeholder="e.g. Introduction to ReactJS" register={register} errors={errors} />
			<InputField type="select" options={["MERN Stack Development", "Frontend Development", "Backend Development", "DSA"]} label="Select Course" name="course" register={register} errors={errors} />

			{/* Row 2 */}
			<InputField label="Batch Name or Academic Year" name="batch" placeholder="e.g. 2025-2026 or BATCH-12" register={register} errors={errors} />
			<InputField type="select" options={["Harsh Sharma", "Sarthak Sharma", "Ankur Prajapati"]} label="Select Teacher" name="teacher" register={register} errors={errors} />

			{/* Row 3 */}
			<InputField label="Number of Students" name="noOfStudents" placeholder="e.g. 35" register={register} errors={errors} />
			<InputField label="Classroom / Room No." name="classroom" placeholder="e.g. Room 301" register={register} errors={errors} />

			{/* Row 4 */}
			<InputField label="Class Timing" name="timing" placeholder="e.g. 9:00 AM - 11:00 AM" register={register} errors={errors} />
			<InputField type="select" options={["Active", "Inactive"]} label="Status" name="status" register={register} errors={errors} />

			{/* Row 5 */}
			<div className="col-span-2">
				<InputField isTextArea={true} label="Notes / Description" name="description" placeholder="Optional description..." register={register} />
			</div>

			{/* Submit button */}
			<FormSubmitBtn name="Add New Class" />
		</form>
	);
};

export default AddClassForm;
