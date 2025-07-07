import {useForm} from "react-hook-form";
import InputField from "../InputField";
import FormSubmitBtn from "../FormSubmitBtn";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import classesService from "../../appwrite/services/classesService";
import {addClass} from "../../features/classes/classesSlice";
import {notifySuccess} from "../../utils/ToastNotification";
import {closeModel} from "../../features/toggleModelView/toggleModelSlice";

const AddClassForm = () => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const [appwriteError, setAppwriteError] = useState("");
	const instituteID = useSelector((state) => state.authReducer.instituteDetails.$id);
	const {
		register,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm();

	async function addClassData(classData) {
		setAppwriteError("");
		setLoading(true);

		try {
			const createdClass = await classesService.addClass({
				instituteID,
				...classData,
			});

			if (createdClass) {
				dispatch(addClass(createdClass));

				notifySuccess("Class added successfully!");
				dispatch(closeModel());
				reset(); // clear all the input fields
			}
		} catch (error) {
			setAppwriteError(error.message);
		} finally {
			setLoading(false);
		}
	}

	return (
		<form onSubmit={handleSubmit(addClassData)} className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 text-white rounded">
			{/* Row 1 */}
			<InputField label="Class / Topic Title" name="classTopic" placeholder="e.g. Introduction to ReactJS" register={register} errors={errors} />
			<InputField type="select" options={["MERN Stack Development", "Frontend Development", "Backend Development", "DSA"]} label="Select Course" name="course" register={register} errors={errors} />

			{/* Row 2 */}
			<InputField label="Batch Name or Academic Year" name="batch" placeholder="e.g. 2025-2026 or BATCH-12" register={register} errors={errors} />
			<InputField type="select" options={["Harsh Sharma", "Sarthak Sharma", "Ankur Prajapati"]} label="Select Teacher" name="teacher" register={register} errors={errors} />

			{/* Row 3 */}
			<InputField label="Number of Students (Optional)" name="noOfStudents" placeholder="e.g. 35" register={register} errors={errors} />
			<InputField label="Classroom / Room No." name="classroom" placeholder="e.g. Room 301" register={register} errors={errors} />

			{/* Row 4 */}
			<InputField label="Class Timing" name="timing" placeholder="e.g. 9:00 AM - 11:00 AM" register={register} errors={errors} />
			<InputField type="select" options={["Active", "Inactive"]} label="Status" name="status" register={register} errors={errors} />

			{/* Row 5 */}
			<div className="col-span-2">
				<InputField isTextArea={true} label="Notes / Description (Optional)" name="description" placeholder="Optional description..." register={register} />
			</div>
			{/* Appwrite error message */}
			{appwriteError && <p className="col-span-2 text-red-600 font-medium">{appwriteError}</p>}
			{/* Submit button */}
			<FormSubmitBtn loading={loading} name="Add New Class" marginTop="1rem" />
		</form>
	);
};

export default AddClassForm;
