import {CircleFadingPlus} from "lucide-react";
import PageHeader from "../PageHeader";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const ClassesHeader = () => {
	const {register, watch} = useForm();

	useEffect(() => {
		console.log(watch("classes"));

	}, [watch("classes")])
	

	return <PageHeader placeholder="Search classes..." btnIcon={<CircleFadingPlus size="1.32rem" />} btnText="Add New Class" name="classes" register={register} />;
};

export default ClassesHeader;
