import {CircleFadingPlus} from "lucide-react";
import PageHeader from "../PageHeader";
import { useForm } from "react-hook-form";

const CoursesHeader = () => {
	const {register, watch} = useForm();

	console.log(watch("courses"));
	

	return <PageHeader placeholder="Search courses..." btnIcon={<CircleFadingPlus size="1.32rem" />} btnText="Add Course" name="courses" register={register} />;
};

export default CoursesHeader;
