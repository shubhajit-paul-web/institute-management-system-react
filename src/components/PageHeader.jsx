import SearchBox from "./SearchBox";
import ButtonOne from "./ButtonOne";
import SectionWrapper from "./SectionWrapper";
import { CircleFadingPlus } from "lucide-react";

const PageHeader = ({placeholder, btnIcon = <CircleFadingPlus />, btnText, children, name, register}) => {
	return (
		<SectionWrapper>
			<div className="flex justify-between items-center">
				<form className="w-2/5">
					<SearchBox placeholder={placeholder} name={name} register={register} />
				</form>
				<div className="flex items-center gap-4">
					{children}
					<ButtonOne icon={btnIcon} text={btnText} />
				</div>
			</div>
		</SectionWrapper>
	);
};

export default PageHeader;
