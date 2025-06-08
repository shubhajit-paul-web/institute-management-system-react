import SearchBox from "./SearchBox";
import ButtonOne from "./ButtonOne";

const PageHeader = ({placeholder, btnIcon, btnText, children}) => {
	return (
		<div className="flex justify-between items-center bg-zinc-50 p-5 rounded-lg">
			<form className="w-2/5">
				<SearchBox placeholder={placeholder} />
			</form>
			<div className="flex items-center gap-4">
				{children}
				<ButtonOne icon={btnIcon} text={btnText} />
			</div>
		</div>
	);
};

export default PageHeader;
