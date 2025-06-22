import { lazy } from "react";
import PageWrapper from "../components/PageWrapper";
import SectionWrapper from "../components/SectionWrapper";
const StudentTable = lazy(() => import("../components/Students/StudentsTable"));
const StudentsHeader = lazy(() => import("../components/Students/StudentsHeader"));
const Model = lazy(() => import("../components/Model"));
const AddStudentForm = lazy(() => import("../components/Students/AddStudentForm"));

const Students = () => {
	return (
		<PageWrapper pageName="Students">
			<Model modelName="New admission" reducerName="studentModel">
				<AddStudentForm />
			</Model>
			<StudentsHeader />
			<SectionWrapper>
				<StudentTable />
			</SectionWrapper>
		</PageWrapper>
	);
};

export default Students;
