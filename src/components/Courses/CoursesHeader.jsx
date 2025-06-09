import {CircleFadingPlus} from "lucide-react";
import PageHeader from "../PageHeader";

const CoursesHeader = () => {
	return <PageHeader placeholder="Search courses..." btnIcon={<CircleFadingPlus size="1.32rem" />} btnText="Add Course" />;
};

export default CoursesHeader;
