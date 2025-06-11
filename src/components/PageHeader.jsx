import SearchBox from "./SearchBox";
import ButtonOne from "./ButtonOne";
import AddStudentModel from "./Students/AddStudentModel";
import SectionWrapper from "./SectionWrapper";
import { openStudentModel } from "../features/toggleModelView/toggleModelSlice";
import { useDispatch } from "react-redux";

const PageHeader = ({placeholder, btnIcon, btnText, children}) => {
	const dispatch = useDispatch();

	function handleModel() {
		dispatch(openStudentModel(true));
	}

	return (
		<SectionWrapper>
			<div className="flex justify-between items-center">
				<form className="w-2/5">
					<SearchBox placeholder={placeholder} />
				</form>
				<div className="flex items-center gap-4">
					{children}
					<ButtonOne icon={btnIcon} text={btnText} modelView={<AddStudentModel />} handleModel={handleModel} />
				</div>
			</div>
		</SectionWrapper>
	);
};

export default PageHeader;
