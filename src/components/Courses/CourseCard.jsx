import coursesService from "../../appwrite/services/coursesService";
import TagHighlighter from "../TagHighlighter";
import CardBtnGroup from "./CardBtnGroup";

const CourseCard = ({courseInfo}) => {
	return (
		<div className="dark:bg-dark-one/30 border dark:border-dark-one p-3.5 rounded-xl transition duration-300 dark:hover:shadow-md dark:shadow-white/5 hover:-translate-y-1">
			<img src={coursesService.generateFileURL(courseInfo?.thumbnail)} alt="course thumbnail" width="100%" className="block w-full aspect-[5/3] rounded-xl" />
			<div className="mt-3 flex flex-col gap-2">
				<div className="dark:text-[#E6EDF3] text-[1.33rem] font-bold line-clamp-1">{courseInfo?.title}</div>
				<div className="dark:text-text-medium-dark font-medium flex gap-4">
					<span>🕒 {courseInfo?.duration}</span>
					<span>💰 ₹{courseInfo?.price?.toLocaleString()}</span>
				</div>
				<div className="max-w-[80%] flex items-center gap-2 mt-2 overflow-x-auto" style={{scrollbarWidth: "none"}}>
					{courseInfo.tags.split(",").map((tag, index) => (
						<TagHighlighter key={index} tag={tag.trim()} />
					))}
				</div>
				<p className="dark:text-[#8B949E] leading-tight mt-2 line-clamp-1">{courseInfo.description}</p>
				<CardBtnGroup courseId={courseInfo.$id} />
			</div>
		</div>
	);
};

export default CourseCard;
