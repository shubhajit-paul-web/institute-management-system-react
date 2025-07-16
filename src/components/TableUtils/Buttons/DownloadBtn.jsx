import {Tooltip} from "antd";
import { Download } from "lucide-react";

const DownloadBtn = ({onClick, tooltipTitle = "Download"}) => {
	return (
		<Tooltip title={tooltipTitle}>
			<button onClick={onClick} className="bg-amber-400/15 p-2 text-amber-600 rounded-md">
				<Download size="1.1rem" />
			</button>
		</Tooltip>
	);
};

export default DownloadBtn;
