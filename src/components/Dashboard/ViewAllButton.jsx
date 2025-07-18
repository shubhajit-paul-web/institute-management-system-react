import {useNavigate} from "react-router-dom";

const ViewAllButton = ({btnName, route = "/"}) => {
	const navigate = useNavigate();

	return (
		<button onClick={() => navigate(route)} className="text-sm font-medium bg-zinc-700/30 border border-zinc-600 hover:bg-zinc-700/60 text-zinc-200 px-3 py-1 rounded-md">
			{btnName}
		</button>
	);
};

export default ViewAllButton;
