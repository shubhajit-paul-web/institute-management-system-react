import {CircleFadingPlus} from "lucide-react";
import PageHeader from "../PageHeader";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { searchCourses } from "../../features/courses/coursesSlice";
import useDebounceEffect from "../../hooks/useDebounceEffect";

const CoursesHeader = () => {
	const dispatch = useDispatch();
	const {register, watch} = useForm();
	const searchCoursesDebounced = useDebounceEffect((query) => dispatch(searchCourses(query)), 200);

	useEffect(() => {
		searchCoursesDebounced(watch("courses"));
	}, [watch("courses")])
	

	return <PageHeader placeholder="Search courses by title..." btnIcon={<CircleFadingPlus size="1.32rem" />} btnText="Add Course" name="courses" register={register} />;
};

export default CoursesHeader;
