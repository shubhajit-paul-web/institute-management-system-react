import SearchBox from "../SearchBox"
import ButtonOne from "../ButtonOne"
import { CircleFadingPlus } from "lucide-react"

const CoursesHeader = () => {
  return (
	<div className="bg-zinc-50 p-5 rounded-lg flex justify-between">
		<form className="w-2/5">
			<SearchBox placeholder="Search courses..." />
		</form>
		<ButtonOne icon={<CircleFadingPlus size="1.05rem" />} text="Add Course" />
	</div>
  )
}

export default CoursesHeader