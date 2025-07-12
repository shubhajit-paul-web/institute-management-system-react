import {useSelector} from "react-redux";

const useGetCourseTitle = () => {
	const coursesData = useSelector((state) => state.coursesReducer.courses);

	return (courseId = "") => {
		const course = coursesData.find((course) => course?.$id === courseId);
		return course?.title;
	};
};

export default useGetCourseTitle;
