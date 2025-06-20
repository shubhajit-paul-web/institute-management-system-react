import { lazy } from "react";
import PageWrapper from "../components/PageWrapper";
import SectionWrapper from "../components/SectionWrapper";
const StudentTable = lazy(() => import("../components/Students/StudentsTable"));
const StudentsHeader = lazy(() => import("../components/Students/StudentsHeader"));
const AddStudentModel = lazy(() => import("../components/Students/AddStudentModel"));

const Students = () => {
	return (
		<PageWrapper pageName="Students">
			<StudentsHeader />
			<SectionWrapper>
				<StudentTable />
			</SectionWrapper>
			<AddStudentModel />
		</PageWrapper>
	);
};

export default Students;
