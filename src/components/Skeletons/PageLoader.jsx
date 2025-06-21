import {BrandLogoLight} from "../BrandLogo";

const PageLoader = () => {
	return (
		<div className="relative h-screen flex justify-center items-center">
			<div className="w-[7.5rem] aspect-square border-8 border-y-transparent border-x-yellow-400/90 rounded-full animate-spin p-3">
				<div className="w-full aspect-square border-8 border-x-transparent border-y-yellow-400/40 rounded-full animate-ping"></div>
			</div>
			<BrandLogoLight className="absolute bottom-10" />
		</div>
	);
};

export default PageLoader;
