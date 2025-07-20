import {Download} from "lucide-react";
import IconButton from "./IconButton";

const DownloadBtn = ({onClick, tooltipTitle = "Download"}) => {
	return <IconButton onClick={onClick} tooltipTitle={tooltipTitle} icon={<Download size="1.1rem" />} className="bg-amber-400/15 text-amber-600" />;
};

export default DownloadBtn;
