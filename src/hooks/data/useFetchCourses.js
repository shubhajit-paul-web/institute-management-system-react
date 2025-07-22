import {useDispatch} from "react-redux";
import coursesService from "../../appwrite/services/coursesService";
import {addCourse} from "../../features/courses/coursesSlice";
import {useEffect, useState} from "react";
import useInstituteId from "../useInstituteId";

const useFetchCourses = () => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	const instituteID = useInstituteId();

	useEffect(() => {
		coursesService
			.getAllCourses(instituteID)
			.then((courses) => {
				if (courses?.total) {
					dispatch(addCourse(courses.documents));
				}
			})
			.catch((error) => console.error("fetchCourses Error:", error.message))
			.finally(() => setLoading(false));
	}, [instituteID, dispatch]);

	return {loading};
};

export default useFetchCourses;
