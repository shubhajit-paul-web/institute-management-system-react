import { lazy } from "react";
import PageWrapper from "../components/PageWrapper";
import SectionWrapper from "../components/SectionWrapper";
import Model from "../components/Model";
import AddCourseForm from "../components/Courses/AddCourseForm";
import CoursesList from "../components/Courses/CoursesList";
// const CourseCard =  lazy(() => import("../components/Courses/CourseCard"));
const CoursesHeader =  lazy(() => import("../components/Courses/CoursesHeader"));

const Courses = () => {
	return (
		<PageWrapper pageName="Courses">
			<CoursesHeader />
			<SectionWrapper>
				<CoursesList />
			</SectionWrapper>
			<Model modelName="Add Course" reducerName="courseModel" width="w-6/11" className="dark:bg-bg-surface-dark/80">
				<AddCourseForm />
			</Model>
		</PageWrapper>
	);
};

export default Courses;
