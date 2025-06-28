import {useEffect, useState} from "react";
import CourseCard from "./CourseCard";
import {addCourse} from "../../features/courses/coursesSlice";
import coursesService from "../../appwrite/services/coursesService";
import {useDispatch, useSelector} from "react-redux";
import SkeletonBlock from "../Skeletons/SkeletonBlock";
import CoursesCardSkeleton from "../Skeletons/Courses/CourseCardSkeleton";
import CoursesListSkeleton from "../Skeletons/Courses/CoursesListSkeleton";

const CoursesList = () => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	const instituteID = useSelector((state) => state.authReducer.instituteDetails.$id);
	const coursesData = useSelector((state) => state.coursesReducer);

	const fetchCourses = async () => {
		setLoading(true);

		try {
			const {documents: courses} = await coursesService.getAllCourses(instituteID);

			if (courses) {
				dispatch(addCourse(courses));
			}
		} catch (error) {
			console.error("fetchCourses Error:", error.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchCourses();
	}, [dispatch]);

	if (loading) {
		return <CoursesListSkeleton />
	}

	console.log(coursesData);

	return (
		<div className={`grid ${coursesData.length >= 3 ? "grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))]" : "grid-cols-3"}  gap-6 place-items-center`}>
			{coursesData.map((courseInfo) => {
				return <CourseCard info={courseInfo} key={courseInfo?.$id} />;
			})}
		</div>
	);
};

export default CoursesList;
