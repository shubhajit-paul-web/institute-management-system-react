import AddCoursesModel from "../components/Courses/AddCoursesModel";
import CourseCard from "../components/Courses/CourseCard";
import CoursesHeader from "../components/Courses/CoursesHeader";
import PageWrapper from "../components/PageWrapper";
import SectionWrapper from "../components/SectionWrapper";

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
			<AddCoursesModel />
		</PageWrapper>
	);
};

export default Courses;
