import PageWrapper from "../components/PageWrapper";
import PageHeader from "../components/PageHeader";
import {searchTeachers} from "../features/teachers/teachersSlice";

const Teachers = () => {
	return (
		<PageWrapper pageName="Teachers">
			<PageHeader placeholder="Search teachers by name..." btnText="Add Teacher" name="teachers" onSearch={searchTeachers} />
		</PageWrapper>
	);
};

export default Teachers;
