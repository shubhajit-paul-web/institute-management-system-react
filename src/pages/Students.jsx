import PageWrapper from "../components/PageWrapper";
import StudentTable from "../components/Students/StudentsTable";
import StudentsHeader from "../components/Students/StudentsHeader";
import AddStudentModel from "../components/Students/AddStudentModel";

const Students = () => {
	return (
		<PageWrapper pageName="Students">
			<StudentsHeader />
			<div className="bg-zinc-50 mt-5 rounded-lg p-5">
				<StudentTable />
			</div>
			<AddStudentModel />
		</PageWrapper>
	);
};

export default Students;
