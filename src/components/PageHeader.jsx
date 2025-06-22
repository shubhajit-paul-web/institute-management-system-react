import SearchBox from "./SearchBox";
import ButtonOne from "./ButtonOne";
import SectionWrapper from "./SectionWrapper";

const PageHeader = ({placeholder, btnIcon, btnText, children}) => {
	return (
		<SectionWrapper>
			<div className="flex justify-between items-center">
				<form className="w-2/5">
					<SearchBox placeholder={placeholder} />
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
