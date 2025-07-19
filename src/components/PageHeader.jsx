import SearchBox from "./SearchBox";
import ButtonOne from "./ButtonOne";
import SectionWrapper from "./SectionWrapper";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {useEffect, useMemo} from "react";
import createDebouncedFunction from "../utils/createDebouncedFunction";

const PageHeader = ({name, onSearch, placeholder, btnIcon, btnText, children}) => {
	const dispatch = useDispatch();
	const {register, watch} = useForm();

	const debouncedSearchFunction = useMemo(() => {
		return createDebouncedFunction((query) => {
			dispatch(onSearch(query));
		});
	}, [dispatch, onSearch]);

	const inputValue = watch(name);

	useEffect(() => {
		if (inputValue !== undefined) {
			debouncedSearchFunction(inputValue);
		}
	}, [inputValue, debouncedSearchFunction]);

	return (
		<SectionWrapper>
			<div className="flex justify-between items-center">
				<SearchBox placeholder={placeholder} name={name} register={register} />
				<div className="flex items-center gap-4">
					{children}
					<ButtonOne icon={btnIcon} text={btnText} />
				</div>
			</div>
		</SectionWrapper>
	);
};

export default PageHeader;
