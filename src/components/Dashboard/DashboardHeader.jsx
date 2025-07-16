import {useSelector} from "react-redux";
import InstituteProfileLogo from "../InstituteProfileLogo";
import Particles from "../Reactbits/Particles/Particles";

const DashboardHeader = () => {
	const {InstituteName, About} = useSelector((state) => state.authReducer.instituteDetails);

	return (
		<div className="dark:bg-bg-surface-dark border dark:border-dark-one rounded-2xl p-12 flex flex-col justify-center items-center gap-1 relative">
			<InstituteProfileLogo width="w-[7.5rem]" />
			<strong className="block text-[1.6rem] mt-3 dark:text-zinc-50">{InstituteName}</strong>
			<p className="text-lg dark:text-zinc-300 line-clamp-1">{About}</p>

			{/* React Bits - Particles Animation */}
			<Particles particleColors={["#ffffff", "#ffffff"]} particleCount={200} particleSpread={10} speed={0.15} particleBaseSize={80} moveParticlesOnHover={false} alphaParticles={true} disableRotation={false} className="opacity-40" />
		</div>
	);
};

export default DashboardHeader;
