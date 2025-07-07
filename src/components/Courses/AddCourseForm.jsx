import {useForm, useFieldArray} from "react-hook-form";
import InputField from "../InputField";
import {Plus, Trash2} from "lucide-react";
import {useState} from "react";
import FieldArrayButtons, {RemoveField} from "../FormUtils/FieldArrayButtons";
import coursesService from "../../appwrite/services/coursesService";
import {useDispatch, useSelector} from "react-redux";
import {addCourse} from "../../features/courses/coursesSlice";
import {notifySuccess} from "../../utils/ToastNotification";
import {closeModel} from "../../features/toggleModelView/toggleModelSlice";
import FormSubmitBtn from "../FormSubmitBtn";

const AddCourseForm = () => {
	const dispatch = useDispatch();
	const [_, setRerender] = useState(0);
	const [loading, setLoading] = useState(false);
	const [appwriteError, setAppwriteError] = useState("");
	const instituteID = useSelector((state) => state.authReducer.instituteDetails.$id);

	const [allInstructors] = useState([
		{
			_id: "t1",
			name: "Rajesh Kumar",
			email: "rajesh@example.com",
			expertise: "Full Stack Development",
			avatar: "https://i.pravatar.cc/150?img=1",
		},
		{
			_id: "t2",
			name: "Sneha Mehta",
			email: "sneha@example.com",
			expertise: "UI/UX Design",
			avatar: "https://i.pravatar.cc/150?img=2",
		},
		{
			_id: "t3",
			name: "Amit Sharma",
			email: "amit@example.com",
			expertise: "Data Science",
			avatar: "https://i.pravatar.cc/150?img=3",
		},
		{
			_id: "t4",
			name: "Priya Desai",
			email: "priya@example.com",
			expertise: "Digital Marketing",
			avatar: "https://i.pravatar.cc/150?img=4",
		},
		{
			_id: "t5",
			name: "Karan Verma",
			email: "karan@example.com",
			expertise: "Cloud & DevOps",
			avatar: "https://i.pravatar.cc/150?img=5",
		},
	]);
	const {
		register,
		control,
		reset,
		handleSubmit,
		setValue,
		getValues,
		formState: {errors},
	} = useForm({
		defaultValues: {
			faqs: [{question: "", answer: ""}],
			instructors: [{instructorId: "", role: ""}],
			syllabus: [
				{
					module: "",
					lessons: [""],
				},
			],
		},
	});

	// Field array for (FAQs)
	const {
		fields: faqFields,
		append: appendFaq,
		remove: removeFaq,
	} = useFieldArray({
		control,
		name: "faqs",
	});

	// Field array for (instructors)
	const {
		fields: instructorFields,
		append: appendInstructor,
		remove: removeInstructor,
	} = useFieldArray({
		control,
		name: "instructors",
	});

	// Field array for syllabus (modules)
	const {fields: ModuleFields, append: appendModule, remove: removeModule} = useFieldArray({control, name: "syllabus"});

	const handleAddLesson = (moduleIndex) => {
		const current = getValues(`syllabus.${moduleIndex}.lessons`) || [];
		setValue(`syllabus.${moduleIndex}.lessons`, [...current, ""]);
		setRerender((prev) => ++prev);
	};

	const handleRemoveLesson = (moduleIndex, lessonIndex) => {
		const current = getValues(`syllabus.${moduleIndex}.lessons`);
		if (lessonIndex) {
			const updated = current.filter((_, i) => i !== lessonIndex);
			setValue(`syllabus.${moduleIndex}.lessons`, updated);
			setRerender((prev) => --prev);
		}
	};

	// upload/add course data to backend
	async function uploadCourse(courseData) {
		setAppwriteError("");
		setLoading(true);

		try {
			const createdCourse = await coursesService.addCourse({
				instituteID,
				...courseData,
				faqs: JSON.stringify(courseData.faqs),
				instructors: JSON.stringify(courseData.instructors),
				syllabus: JSON.stringify(courseData.syllabus),
				thumbnail: courseData.thumbnail[0],
			});

			if (createdCourse) {
				dispatch(addCourse(createdCourse));

				notifySuccess("Course added successfully!");
				dispatch(closeModel());
				reset(); // clear all the input fields
			}
		} catch (error) {
			setAppwriteError(error.message);
		} finally {
			setLoading(false);
		}
	}

	// Categories options
	const categories = [
		"Development",
		"Design",
		"Marketing",
		"Business",
		"Data Science",
		"Cybersecurity",
		"AI & Machine Learning",
		"Finance & Accounting",
		"Product Management",
		"Photography & Video Editing",
		"Health & Wellness",
		"Music & Audio Production",
		"Language Learning",
		"Sales & Communication",
		"Digital Marketing",
		"Leadership & Management",
		"UI/UX Design",
		"Mobile App Development",
		"Web Development",
		"Game Development",
		"Software Testing / QA",
		"Cloud Computing",
		"DevOps & Infrastructure",
		"Human Resources (HR)",
		"Personal Development",
		"Career & Interview Prep",
		"Graphic Design",
		"Animation & Motion Graphics",
		"Content Creation / YouTube",
		"Ethical Hacking",
		"Blockchain & Web3",
	];

	return (
		<form onSubmit={handleSubmit(uploadCourse)} className="mt-6 grid grid-cols-2 gap-6">
			<InputField label="Course Title" name="title" placeholder="e.g., Full Stack Web Development" register={register} errors={errors} />

			<InputField label="Category" name="category" type="select" options={categories} register={register} errors={errors} />

			<InputField label="Tags" name="tags" placeholder="e.g., JavaScript, React, MongoDB" register={register} errors={errors} />

			<InputField label="Start Date" name="startDate" type="date" register={register} errors={errors} />

			<InputField label="Duration" name="duration" placeholder="e.g., 6 weeks, 3 months" register={register} errors={errors} />

			<InputField label="Weekly Time Commitment" name="weeklyTime" placeholder="e.g., 10 hours/week" register={register} errors={errors} />

			<InputField label="Skill Level" name="level" type="select" options={["Beginner", "Intermediate", "Advanced"]} register={register} errors={errors} />

			<InputField label="Mode" name="mode" type="select" options={["Online", "Offline", "Hybrid"]} register={register} errors={errors} />

			<InputField label="Course Thumbnail" name="thumbnail" type="file" register={register} errors={errors} />

			<InputField label="Original Price" name="price" type="number" placeholder="e.g., ₹4999" register={register} errors={errors} />

			<InputField label="Discount Price" name="discountPrice" type="number" placeholder="e.g., ₹2999 (optional)" register={register} errors={errors} />

			<InputField label="Eligibility" name="eligibility" placeholder="e.g., Basic coding knowledge or 10th pass" register={register} errors={errors} />

			<InputField label="Language" name="language" type="select" options={["English", "Hindi", "Hinglish", "Bengali"]} register={register} errors={errors} />

			<InputField label="Promo Video URL" name="promoVideo" placeholder="e.g., https://youtu.be/sample" register={register} errors={errors} />

			<InputField label="Website / External Link" name="websiteLink" placeholder="e.g., https://yourinstitute.com/course-name" register={register} errors={errors} />

			<InputField label="Seats Available (Leave empty for unlimited)" name="seats" type="number" placeholder="e.g., 30" register={register} />

			<InputField label="Certification Provided" name="certification" type="select" register={register} errors={errors} options={["Yes", "No"]} />

			<InputField label="Placement Support" name="placement" type="select" options={["Yes", "No"]} register={register} errors={errors} />

			<InputField label="Status" name="status" type="select" options={["Active", "Inactive"]} register={register} errors={errors} />

			<InputField label="Key Learnings (comma separated)" name="learnings" placeholder="e.g., HTML, CSS, JavaScript, React Basics" register={register} errors={errors} />

			<div className="col-span-2">
				<InputField label="Course Description" name="description" placeholder="Overview of the course, who it’s for, benefits, etc." isTextArea rows={6} register={register} errors={errors} />
			</div>

			{/* Add Syllabus */}
			<div className="col-span-2">
				<p className="text-lg text-white/85 font-semibold mb-4">Add Syllabus</p>

				{ModuleFields.map((field, moduleIndex) => {
					const currentLessons = getValues(`syllabus.${moduleIndex}.lessons`) || [];

					return (
						<div key={field.id} className="border border-gray-700 p-4 rounded mb-2">
							<div className="flex items-center gap-2">
								<div className="flex-1">
									<InputField name={`syllabus.${moduleIndex}.module`} register={register} placeholder="Module Title" className="bg-gray-800" />
								</div>
								<RemoveField remove={removeModule} index={moduleIndex} className="py-4 mt-1" />
							</div>

							<div className="space-y-2 mt-3">
								{currentLessons?.map((_, lessonIndex) => (
									<div key={lessonIndex} className="flex gap-2 items-center pl-8">
										<span className="w-4 h-1 rounded-full bg-zinc-700"></span>
										<div className="flex-1">
											<InputField name={`syllabus.${moduleIndex}.lessons.${lessonIndex}`} register={register} placeholder="Lesson Title" className="py-3" />
										</div>
										<button type="button" onClick={() => handleRemoveLesson(moduleIndex, lessonIndex)} className="bg-red-600 hover:bg-red-500 text-white py-3 px-4 rounded-md transition duration-200`" disabled={!lessonIndex}>
											<Trash2 size="1.3rem" />
										</button>
									</div>
								))}

								<button type="button" onClick={() => handleAddLesson(moduleIndex)} className="bg-green-600 text-white px-3.5 py-2.5 rounded-lg flex items-center gap-1 ml-14 mt-3">
									<Plus size="1.2rem" />
									Add Lesson
								</button>
							</div>
						</div>
					);
				})}

				<button
					type="button"
					onClick={() =>
						appendModule({
							module: "",
							lessons: [""],
						})
					}
					className="bg-green-700 text-white px-4.5 py-3.5 rounded-lg flex items-center gap-2 font-medium mt-3">
					<Plus size="1.2rem" /> Add Module
				</button>
			</div>

			{/* Add Instructors (Dynamic) */}
			<div className="col-span-2">
				{instructorFields.map((field, index) => (
					<div key={field.id}>
						<div className="flex gap-4 items-end mb-2.5">
							<div className="flex-1">
								<label className="text-white text-sm font-medium">Select Teacher</label>
								<select {...register(`instructors.${index}.instructorId`, {required: true})} className="w-full p-3 mt-1 bg-[#2C2F38] text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500">
									<option value="">Select Instructor</option>
									{allInstructors.map((instructor) => (
										<option key={instructor._id} value={instructor._id}>
											{instructor.name}
										</option>
									))}
								</select>
								{errors[`instructors.${index}.instructorId`] && <p className="text-red-500 font-medium text-sm mt-1">Select instructor is required</p>}
							</div>

							<div className="flex-1">
								<InputField label="Role" name={`instructors.${index}.role`} register={register} placeholder="e.g., Lead, Assistant" className="py-3" errors={errors} />
							</div>
							{/* add, remove field buttons */}
							<FieldArrayButtons append={appendInstructor} remove={removeInstructor} appendIndex={index} removeIndex={index} />
						</div>
					</div>
				))}
			</div>

			{/* Add FAQs (Dynamic) */}
			<div className="col-span-2">
				<p className="text-lg font-semibold text-white/85 mb-4">Course FAQs</p>

				<div className="col-span-2">
					{faqFields.map((item, index) => (
						<div key={item.id} className="flex items-end gap-4 mb-2">
							{/* Question field */}
							<div className="flex-1">
								<InputField label="Question" name={`faqs.${index}.question`} register={register} placeholder="e.g., What if I miss a class?" className="py-3" />
							</div>
							{/* Answer field */}
							<div className="flex-1">
								<InputField label="Answer" name={`faqs.${index}.answer`} register={register} placeholder="e.g., You’ll get recorded sessions" className="py-3" />
							</div>
							{/* add, remove field buttons */}
							<FieldArrayButtons append={appendFaq} remove={removeFaq} appendIndex={index} removeIndex={index} />
						</div>
					))}
				</div>
			</div>
			{/* Appwrite error message */}
			{appwriteError && <p className="col-span-2 text-red-600 font-medium">{appwriteError}</p>}
			{/* Submit button */}
			<FormSubmitBtn loading={loading} name="Add Course" marginTop="mt-8" />
		</form>
	);
};

export default AddCourseForm;
