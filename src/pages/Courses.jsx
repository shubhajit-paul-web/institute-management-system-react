import { lazy } from "react";
import PageWrapper from "../components/PageWrapper";
import SectionWrapper from "../components/SectionWrapper";
import Model from "../components/Model";
import AddCourseForm from "../components/Courses/AddCourseForm";
const CourseCard =  lazy(() => import("../components/Courses/CourseCard"));
const CoursesHeader =  lazy(() => import("../components/Courses/CoursesHeader"));

const Courses = () => {
	const coursesData = [1, 2, 3];

	return (
		<PageWrapper pageName="Courses">
			<CoursesHeader />
			<SectionWrapper>
				<div className={`grid ${coursesData.length >= 3 ? "grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))]" : "grid-cols-3"}  gap-6 place-items-center`}>
					{coursesData.map(() => {
						return <CourseCard />;
					})}
				</div>
			</SectionWrapper>
			<Model modelName="Add Course" reducerName="courseModel" width="w-6/11" className="dark:bg-bg-surface-dark/80">
				<AddCourseForm />
			</Model>
		</PageWrapper>
	);
};

export default Courses;
