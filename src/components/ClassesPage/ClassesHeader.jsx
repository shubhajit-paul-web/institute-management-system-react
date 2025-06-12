import {CircleFadingPlus} from "lucide-react";
import PageHeader from "../PageHeader";

const ClassesHeader = () => {
	return <PageHeader placeholder="Search classes..." btnIcon={<CircleFadingPlus size="1.32rem" />} btnText="Add Class" />;
};

export default ClassesHeader;
