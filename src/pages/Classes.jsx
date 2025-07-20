import PageWrapper from "../components/PageWrapper";
import PageHeader from "../components/PageHeader";
import SectionWrapper from "../components/SectionWrapper";
import Model from "../components/Model";
import ClassesTable from "../components/Classes/ClassesTable";
import AddClassForm from "../components/Classes/AddClassForm";
import {searchClasses} from "../features/classes/classesSlice";

const Classes = () => {
	return (
		<PageWrapper pageName="Classes">
			<PageHeader placeholder="Search classes by topic or course..." btnText="Add Class" name="classes" onSearch={searchClasses} />
			<SectionWrapper extraStyles="overflow-hidden">
				<ClassesTable />
			</SectionWrapper>
			<Model modelName="Add New Class" reducerName="classModel">
				<AddClassForm />
			</Model>
		</PageWrapper>
	);
};

export default Classes;
