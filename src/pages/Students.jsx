import {lazy} from "react";
import PageWrapper from "../components/PageWrapper";
import SectionWrapper from "../components/SectionWrapper";
import StudentTable from "../components/Students/StudentsTable";
const StudentsHeader = lazy(() => import("../components/Students/StudentsHeader"));
const Model = lazy(() => import("../components/Model"));
const AddStudentForm = lazy(() => import("../components/Students/AddStudentForm"));

const Students = () => {
	return (
		<PageWrapper pageName="Students">
			<StudentsHeader />
			<SectionWrapper>
				<StudentTable />
			</SectionWrapper>
			<Model modelName="New admission" reducerName="studentModel">
				<AddStudentForm />
			</Model>
		</PageWrapper>
	);
};

export default Students;
