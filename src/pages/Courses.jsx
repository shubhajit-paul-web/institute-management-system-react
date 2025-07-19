import PageWrapper from "../components/PageWrapper";
import SectionWrapper from "../components/SectionWrapper";
import Model from "../components/Model";
import AddCourseForm from "../components/Courses/AddCourseForm";
import CoursesList from "../components/Courses/CoursesList";
import PageHeader from "../components/PageHeader";
import {searchCourses} from "../features/courses/coursesSlice";

const Courses = () => {
	return (
		<PageWrapper pageName="Courses">
			<PageHeader placeholder="Search courses by title..." btnText="Add Course" name="courses" onSearch={searchCourses} />
			<SectionWrapper>
				<CoursesList />
			</SectionWrapper>
			<Model modelName="Add New Course" reducerName="courseModel" width="w-6/11" className="dark:bg-bg-surface-dark/80">
				<AddCourseForm />
			</Model>
		</PageWrapper>
	);
};

export default Courses;
