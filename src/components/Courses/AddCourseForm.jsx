import {useForm, useFieldArray} from "react-hook-form";
import InputField from "../InputField";
import {Button} from "antd";
import {CircleFadingPlus, Plus, Trash2} from "lucide-react";

const AddCourseForm = () => {
	const {
		register,
		control,
		handleSubmit,
		formState: {errors},
	} = useForm({
		defaultValues: {
			faqs: [{question: "", answer: ""}],
		},
	});

	// FAQs controls
	const {fields, append, remove} = useFieldArray({
		control,
		name: "faqs",
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

			<InputField label="Instructor Name" name="instructor" placeholder="e.g., Rajesh Kumar" register={register} errors={errors} />

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

			{/* FAQs */}
			<div className="col-span-2">
				<h3 className="text-lg font-semibold text-white/85 mb-4">Course FAQs</h3>

				<div className="col-span-2">
					{fields.map((item, index) => (
						<div key={item.id} className="flex items-end gap-4 mb-2">
							{/* question */}
							<div className="flex-1">
								<label className="text-white text-sm">Question</label>
								<input
									{...register(`faqs.${index}.question`, {
										required: "Question is required",
									})}
									placeholder="e.g., What if I miss a class?"
									className="w-full p-3 mt-1 bg-[#2C2F38] text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
								/>
								{errors.faqs?.[index]?.question && <p className="text-red-500 text-sm">{errors.faqs[index].question.message}</p>}
							</div>
							{/* answer */}
							<div className="flex-1">
								<label className="text-white text-sm">Answer</label>
								<input
									{...register(`faqs.${index}.answer`, {
										required: "Answer is required",
									})}
									placeholder="e.g., You’ll get recorded sessions"
									className="w-full p-3 mt-1 bg-[#2C2F38] text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
								/>
								{errors.faqs?.[index]?.answer && <p className="text-red-500 text-sm">{errors.faqs[index].answer.message}</p>}
							</div>
							{/* add, remove fields */}
							<div className="flex gap-2">
								<button type="button" onClick={() => append(index)} className="bg-green-600 hover:bg-green-500 text-white py-3.5 px-4 rounded-md transition duration-200">
									<Plus size="1.3rem" />
								</button>
								<button type="button" onClick={() => remove(index)} className="bg-red-600 hover:bg-red-500 text-white py-3 px-4 rounded-md transition duration-200">
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
