import PageWrapper from "../components/PageWrapper";
import StudentTable from "../components/Students/StudentsTable";
import StudentsHeader from "../components/Students/StudentsHeader";
import AddStudentModel from "../components/Students/AddStudentModel";
import SectionWrapper from "../components/SectionWrapper";

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
