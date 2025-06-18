import {CircleGauge} from "lucide-react";
import LogoutBtn from "../../Settings/LogoutBtn";
import { useNavigate } from "react-router-dom";

const AlreadyLoggedIn = () => {
	const navigate = useNavigate();
	
	return (
		<div className="h-screen flex flex-col gap-2 items-center justify-center">
			<h1 className="text-xl py-3 text-white/90">✅ You're already logged in! </h1>
			<div className="bg-bg-dark/80 p-6 rounded-lg">
				<p className="text-[1.15rem] text-white/75">
					<span>Logged in as:</span>
					<span className="bg-white/15 py-1 px-3.5 rounded-lg ml-2">sheryians@gmail.com</span>
				</p>
			</div>
			<div className="flex justify-center items-center gap-3 pt-4">
				<button className="bg-accent-dark-one text-white py-2 px-4 rounded-lg flex items-center gap-2.5 hover:bg-accent-dark-one/80" onClick={() => navigate("/")}>
					<CircleGauge size="1.2rem" /> Go to Dashboard
				</button>
				<LogoutBtn />
			</div>
		</div>
	);
};

export default AlreadyLoggedIn;
