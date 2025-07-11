import {useDispatch, useSelector} from "react-redux";
import coursesService from "../appwrite/services/coursesService";
import {addCourse} from "../features/courses/coursesSlice";
import {useEffect, useState} from "react";

const useFetchCourses = () => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	const instituteID = useSelector((state) => state.authReducer.instituteDetails.$id);

	useEffect(() => {
		coursesService
			.getAllCourses(instituteID)
			.then((courses) => {
				if (courses) {
					dispatch(addCourse(courses.documents));
				}
			})
			.catch((error) => console.error("fetchCourses Error:", error.message))
			.finally(() => setLoading(false));
	}, []);

	return loading;
};

export default useFetchCourses;
