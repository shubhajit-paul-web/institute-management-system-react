import PageWrapper from "../components/PageWrapper";
import StudentCard from "../components/Students/StudentsTable";
import StudentsHeader from "../components/Students/StudentsHeader";

const Students = () => {
	return (
		<PageWrapper pageName="Students">
			<StudentsHeader />
			<div className="bg-zinc-50 mt-5 rounded-lg p-5">
				<StudentCard />
			</div>
		</PageWrapper>
	);
};

export default Students;
