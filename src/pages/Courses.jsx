import CourseCard from "../components/Courses/CourseCard"
import CoursesHeader from "../components/Courses/CoursesHeader"
import PageWrapper from "../components/PageWrapper"

const Courses = () => {
  return (
	  <PageWrapper pageName="Courses">
      <CoursesHeader />
      <div className="bg-zinc-50 p-5 mt-5 rounded-lg">
        <CourseCard />
      </div>
    </PageWrapper>
  )
}

export default Courses