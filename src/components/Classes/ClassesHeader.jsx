import PageHeader from "../PageHeader";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchClasses } from "../../features/classes/classesSlice";
import useDebounceEffect from "../../hooks/useDebounceEffect";

const ClassesHeader = () => {
	const dispatch = useDispatch();
	const {register, watch} = useForm();
	const searchClassesDebounced = useDebounceEffect((query) => dispatch(searchClasses(query)), 200);

	useEffect(() => {
		searchClassesDebounced(watch("classes"));
	}, [watch("classes")])
	

	return <PageHeader placeholder="Search classes by topic or course..." btnText="Add New Class" name="classes" register={register} />;
};

export default ClassesHeader;
