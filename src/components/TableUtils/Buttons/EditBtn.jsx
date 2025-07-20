import {Edit} from "lucide-react";
import IconButton from "./IconButton";

const EditBtn = ({onClick, tooltipTitle = "Edit"}) => {
	return <IconButton onClick={onClick} tooltipTitle={tooltipTitle} icon={<Edit size="1.1rem" />} className="bg-green-400/15 text-green-600" />;
};

export default EditBtn;
