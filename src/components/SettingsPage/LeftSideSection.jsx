import ProfileFieldWrapper from "./ProfileFieldWrapper";
import ProfileField from "./ProfileField";
import LogoutBtn from "./LogoutBtn";
import ThemeToggle from "./ThemeToggle";

const LeftSideSection = () => {
	return (
		<ProfileFieldWrapper extraStyles="flex-1 justify-center">
			<div className="relative w-full flex flex-col items-center p-5">
				<div className="relative mb-8 w-[10rem] rounded-full overflow-hidden bg-white p-5 border-4 outline-4 outline-zinc-700">
					<img src="https://avatars.githubusercontent.com/u/69582226?v=4" alt="institute logo" />
				</div>
				<div className="w-full">
						<ProfileField lable="Email Address" value="sheryians@gmail.com" extraStyles="w-full mb-5" />
						<ProfileField lable="Password" value="***********" extraStyles="w-full" />
						<LogoutBtn />
						<div className="absolute top-0 right-0">
							<ThemeToggle />
						</div>
				</div>
			</div>
		</ProfileFieldWrapper>
	);
};

export default LeftSideSection;
