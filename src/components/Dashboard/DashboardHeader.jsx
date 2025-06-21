import { useSelector } from "react-redux";
import InstituteProfileLogo from "../InstituteProfileLogo";

const DashboardHeader = () => {
	const {InstituteName, About} = useSelector((state) => state.authReducer.instituteDetails);

	return (
		<div className="dark:bg-bg-surface-dark border dark:border-dark-one rounded-2xl p-12 flex flex-col justify-center items-center gap-1">
			<InstituteProfileLogo width="7.5rem" />
			<strong className="block text-[1.6rem] mt-3 dark:text-zinc-50">{InstituteName}</strong>
			<p className="text-lg dark:text-zinc-300 line-clamp-1">{About}</p>
		</div>
	);
};

export default DashboardHeader;
