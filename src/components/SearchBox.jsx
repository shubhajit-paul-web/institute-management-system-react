import {Search} from "lucide-react";
import {useState} from "react";

const SearchBox = ({placeholder, name, register, width = "w-2/5"}) => {
	const [isFocused, setIsFocused] = useState(false);

	const handleFocus = () => setIsFocused(true);
	const handleBlur = () => setIsFocused(false);

	return (
		<form className={width}>
			<div className={`flex items-center gap-3 w-full py-3 px-4 rounded-lg text-lg border dark:border-dark-one dark:bg-bg-dark dark:text-text-main-dark transition ease-linear outline-0 duration-150 ${isFocused && "dark:shadow-[0_0_0_3px_#30363D]"}`}>
				<Search size="1.2rem" className="opacity-75" />
				<input {...register(name)} type="search" placeholder={placeholder} aria-label={placeholder} className="w-full outline-none" onFocus={handleFocus} onBlur={handleBlur} />
			</div>
		</form>
	);
};

export default SearchBox;
