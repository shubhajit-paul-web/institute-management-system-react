import CourseCard from "../components/Courses/CourseCard";
import CoursesHeader from "../components/Courses/CoursesHeader";
import PageWrapper from "../components/PageWrapper";

const Courses = () => {
	const coursesData = [1, 2, 3];

	return (
		<PageWrapper pageName="Courses">
			<CoursesHeader />
			<div className={`bg-zinc-100 p-5 mt-5 rounded-lg grid ${coursesData.length >= 3 ? "grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))]" : "grid-cols-3"}  gap-6 place-items-center`}>
				{coursesData.map(() => {
					return <CourseCard />;
				})}
			</div>
		</PageWrapper>
	);
};

export default Courses;
