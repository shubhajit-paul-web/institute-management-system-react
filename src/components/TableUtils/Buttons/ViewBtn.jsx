import IconButton from "./IconButton";

const ViewBtn = ({onClick, tooltipTitle = "View"}) => {
	return <IconButton onClick={onClick} tooltipTitle={tooltipTitle} className="bg-sky-400/15 text-sky-600" />;
};

export default ViewBtn;
