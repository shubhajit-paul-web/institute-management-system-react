import { useSelector } from "react-redux";
import defaultProfileImg from "../assets/images/default-profile-img-logo.png";

const InstituteProfileLogo = ({width, className}) => {
	const {Logo} = useSelector((data) => data.authReducer.instituteDetails);

	return <div className={`w-[${width || "10rem"}] ${className} aspect-square rounded-full overflow-hidden bg-white p-5 border-4 outline-4 outline-zinc-700 bg-center bg-cover`} style={{backgroundImage: `url(${Logo || defaultProfileImg})`}}></div>;
};

export default InstituteProfileLogo;
