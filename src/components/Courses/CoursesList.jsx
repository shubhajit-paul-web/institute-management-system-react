import CourseCard from "./CourseCard";
import {useSelector} from "react-redux";
import CoursesListSkeleton from "../Skeletons/Courses/CoursesListSkeleton";
import useFetchCourses from "../../hooks/data/useFetchCourses";

const CoursesList = () => {
	const coursesData = useSelector((state) => state.coursesReducer.filteredCourses);
	const {loading} = useFetchCourses();

	return loading ? (
		<CoursesListSkeleton />
	) : (
		<>
			{!coursesData.length && <p className="text-lg text-center font-medium py-[27.4vh]  dark:text-gray-600">No courses found...</p>}
			<div className={`grid ${coursesData.length >= 3 ? "grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))]" : "grid-cols-3"}  gap-6 place-items-center`}>
				{coursesData.map((courseInfo) => {
					return <CourseCard courseInfo={courseInfo} key={courseInfo?.$id} />;
				})}
			</div>
		</>
	);
};

export default CoursesList;
