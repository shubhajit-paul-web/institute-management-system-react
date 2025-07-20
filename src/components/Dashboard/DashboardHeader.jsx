import {useSelector} from "react-redux";
import InstituteProfileLogo from "../InstituteProfileLogo";
import Particles from "../Reactbits/Particles/Particles";
import Aurora from "../Reactbits/Aurora/Aurora";

const DashboardHeader = () => {
	const {InstituteName} = useSelector((state) => state.authReducer.instituteDetails);

	return (
		<div className="dark:bg-bg-surface-dark border dark:border-dark-one rounded-2xl p-12 flex flex-col justify-center items-center gap-1 relative overflow-hidden">
			<InstituteProfileLogo width="w-[7.5rem]" />
			<strong className="block text-[1.6rem] mt-3 dark:text-zinc-50">{InstituteName}</strong>
			<p className="text-lg dark:text-zinc-300 line-clamp-1">Welcome to your {InstituteName} admin dashboard.</p>

			{/* Background animations - Reactbits */}
			<Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} blend={0.5} amplitude={1.0} speed={0.5} />
			<Particles particleColors={["#5f0f40", "#4361ee", "#ffffff"]} particleCount={200} particleSpread={10} speed={0.15} particleBaseSize={70} moveParticlesOnHover={false} alphaParticles={true} disableRotation={false} className="opacity-40" />
		</div>
	);
};

export default DashboardHeader;
