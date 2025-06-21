import ProfileFieldWrapper from "./ProfileFieldWrapper";
import ProfileField from "./ProfileField";
import LogoutBtn from "./LogoutBtn";
import ThemeToggle from "./ThemeToggle";
import {useSelector} from "react-redux";
import InstituteProfileLogo from "../InstituteProfileLogo";

const LeftSideSection = () => {
	const instituteDetails = useSelector((data) => data.authReducer.instituteDetails);

	return (
		<ProfileFieldWrapper extraStyles="flex-1 justify-center">
			<div className="relative w-full flex flex-col items-center p-5">
				<InstituteProfileLogo className="mb-8" />
				<div className="w-full">
					<ProfileField lable="Email Address" value={instituteDetails?.EmailAddress} className="w-full mb-5" />
					<ProfileField lable="Password" value="***********" className="w-full" />
					<LogoutBtn extraStyles="mt-10" />
					<div className="absolute top-0 right-0">
						<ThemeToggle />
					</div>
				</div>
			</div>
		</ProfileFieldWrapper>
	);
};

export default LeftSideSection;
