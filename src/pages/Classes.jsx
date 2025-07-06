import PageWrapper from "../components/PageWrapper"
import ClasessHeader from "../components/Classes/ClassesHeader"
import SectionWrapper from "../components/SectionWrapper"
import Model from "../components/Model"
import ClassesTable from "../components/Classes/ClassesTable"
import AddClassForm from "../components/Classes/AddClassForm"

const Classes = () => {
  return (
	  <PageWrapper pageName="Classes">
      <ClasessHeader />
      <SectionWrapper extraStyles="overflow-hidden">
        <ClassesTable />
      </SectionWrapper>
      <Model modelName="Add New Class" reducerName="classModel">
				<AddClassForm />
			</Model>
    </PageWrapper>
  )
}

export default Classes