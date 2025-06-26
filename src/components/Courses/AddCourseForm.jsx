import {useForm, useFieldArray} from "react-hook-form";
import InputField from "../InputField";
import {Button} from "antd";
import {CircleFadingPlus, Plus, Trash2} from "lucide-react";
import {useState} from "react";

const AddCourseForm = () => {
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
		handleSubmit,
		formState: {errors},
	} = useForm({
		defaultValues: {
			faqs: [{question: "", answer: ""}],
			instructors: [{instructorId: "", role: ""}],
		},
	});

	// Set up field array for dynamically adding/removing FAQs
	const {
		fields: faqFields,
		append: appendFaq,
		remove: removeFaq,
	} = useFieldArray({
		control,
		name: "faqs",
	});

	// Set up field array for dynamically adding/removing instructors
	const {
		fields: instructorFields,
		append: appendInstructor,
		remove: removeInstructor,
	} = useFieldArray({
		control,
		name: "instructors",
	});

	// upload/add course data to backend
	function uploadCourse(data) {
		console.log(data);
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

			<InputField label="Price" name="price" type="number" placeholder="e.g., ₹4999" register={register} errors={errors} />

			<InputField label="Discount Price" name="discountPrice" type="number" placeholder="e.g., ₹2999 (optional)" register={register} errors={errors} />

			<InputField label="Eligibility" name="eligibility" placeholder="e.g., Basic coding knowledge or 10th pass" register={register} errors={errors} />

			<InputField label="Language" name="language" type="select" options={["English", "Hindi", "Hinglish", "Bengali"]} register={register} errors={errors} />

			<InputField label="Promo Video URL" name="promoVideo" placeholder="e.g., https://youtu.be/sample" register={register} errors={errors} />

			<InputField label="Website / External Link" name="website" placeholder="e.g., https://yourinstitute.com/course-name" register={register} errors={errors} />

			<InputField label="Seats Available (Leave empty for unlimited)" name="seats" type="number" placeholder="e.g., 30" register={register} errors={errors} />

			<InputField label="Certification Provided" name="certification" type="select" register={register} errors={errors} options={["Yes", "No"]} />

			<InputField label="Placement Support" name="placement" type="select" options={["Yes", "No"]} register={register} errors={errors} />

			<InputField label="Status" name="status" type="select" options={["Active", "Inactive"]} register={register} errors={errors} />

			<InputField label="Key Learnings (comma separated)" name="learnings" placeholder="e.g., HTML, CSS, JavaScript, React Basics" register={register} errors={errors} />

			<div className="col-span-2">
				<InputField label="Course Description" name="description" placeholder="Overview of the course, who it’s for, benefits, etc." isTextArea rows={6} register={register} errors={errors} />
			</div>
			<div className="col-span-2">
				<InputField label="Curriculum / Syllabus" name="curriculum" placeholder="List of modules/lessons covered in this course" isTextArea rows={8} register={register} errors={errors} margin="top-10" />
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
							<div className="flex gap-2">
								<button type="button" onClick={() => appendInstructor(index)} className="bg-green-600 hover:bg-green-500 text-white py-3.5 px-4 rounded-md transition duration-200">
									<Plus size="1.3rem" />
								</button>
								<button type="button" onClick={() => removeInstructor(index)} className="bg-red-600 hover:bg-red-500 text-white py-3.5 px-4 rounded-md transition duration-200">
									<Trash2 size="1.3rem" />
								</button>
							</div>
						</div>
					</div>
				))}
			</div>

			<button type="button" onClick={() => appendInstructor({instructorId: "", role: ""})} className="bg-green-600 text-white px-4 py-2.5 rounded-md flex items-center gap-2 w-fit">
				<Plus size="1.3rem" /> <span>Add Instructor</span>
			</button>

			{/* Add FAQs (Dynamic) */}
			<div className="col-span-2">
				<h3 className="text-lg font-semibold text-white/85 mb-4">Course FAQs</h3>

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
							<div className="flex gap-2">
								<button type="button" onClick={() => appendFaq(index)} className="bg-green-600 hover:bg-green-500 text-white py-3.5 px-4 rounded-md transition duration-200">
									<Plus size="1.3rem" />
								</button>
								<button type="button" onClick={() => removeFaq(index)} className="bg-red-600 hover:bg-red-500 text-white py-3 px-4 rounded-md transition duration-200">
									<Trash2 size="1.3rem" />
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
			{/* Submit button */}
			<Button htmlType="submit" type="primary" size="large" icon={<CircleFadingPlus size="1.15rem" />} className="mt-8 w-full rounded-md hover:opacity-85" style={{width: "12rem", backgroundColor: "#e36a08", padding: "28px 30px"}}>
				<span className="font-medium text-lg">Add Course</span>
			</Button>
		</form>
	);
};

export default AddCourseForm;
