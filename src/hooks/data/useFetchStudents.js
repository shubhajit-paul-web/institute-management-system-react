import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import studentsService from "../../appwrite/services/studentsService";
import {addStudent} from "../../features/students/studentsSlice";
import useInstituteId from "../useInstituteId";

const useFetchStudents = () => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	const instituteID = useInstituteId();

	useEffect(() => {
		studentsService
			.getAllStudents(instituteID)
			.then((students) => {
				if (students) {
					dispatch(addStudent(students.documents));
				}
			})
			.catch((error) => console.error("useFetchStudents Error:", error.message))
			.finally(() => setLoading(false));
	}, [instituteID, dispatch]);

	return {loading};
};

export default useFetchStudents;
