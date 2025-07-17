import {toPng} from "html-to-image";
import {Download} from "lucide-react";
import {useRef} from "react";
import Barcode from "react-barcode";
import {useSelector} from "react-redux";

const StudentIdCard = ({studentData, handleCloseModel}) => {
	const cardRef = useRef(null);
	const instituteDetails = useSelector((state) => state.authReducer.instituteDetails);

	const handleDownload = () => {
		toPng(cardRef.current)
			.then((dataUrl) => {
				const link = document.createElement("a");
				link.download = `${studentData?.studentId}-student-id-card.png`;
				link.href = dataUrl;
				link.click();
			})
			.catch((err) => {
				console.error(err);
			});
	};

	return (
		<>
			<div ref={cardRef} className="w-[40rem] bg-white rounded-lg shadow-lg py-5 px-7 text-gray-800 font-sans">
				{/* Institute Info */}
				<div className="flex justify-between items-start border-b border-gray-300 pb-4">
					<div className="flex gap-5 items-center">
						<img src={instituteDetails?.Logo} alt="Institute Logo" className="w-16 h-16 object-contain" />
						<div className="max-w-[18rem]">
							<p className="text-2xl font-bold leading-tight">{instituteDetails?.InstituteName}</p>
							<p className="text-sm text-gray-600 mt-1 leading-4.5 line-clamp-2">{instituteDetails?.Address}</p>
						</div>
					</div>
					<div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-sm font-bold uppercase tracking-wide px-5 py-2 rounded-full shadow-md border border-yellow-300">🎓 Student ID Card</div>
				</div>

				{/* Student Info */}
				<div className="mt-5 flex gap-6">
					{/* Profile Photo and Bar code */}
					<div className="flex flex-col items-center">
						<img src={studentData?.photo} alt="Student" className="w-37 h-45 object-cover object-top rounded-md border border-gray-300" />
						<div className="mt-2">
							<Barcode value={studentData?.studentId || "000000"} width={1} height={20} fontSize={12} background="#ffffff" lineColor="#000000" />
						</div>
					</div>
					{/* Student name, id, address */}
					<div className="flex flex-col gap-2 text-sm text-gray-800">
						{/* Name */}
						<div className="bg-gray-100 border border-gray-200 rounded-md px-3 py-1.5">
							<label className="block text-xs text-gray-500 font-medium mb-0.5">Name</label>
							<p className="font-medium leading-tight">{studentData?.studentName}</p>
						</div>

						{/* Student ID */}
						<div className="bg-gray-100 border border-gray-200 rounded-md px-3 py-1.5">
							<label className="block text-xs text-gray-500 font-medium mb-0.5">Student ID</label>
							<p className="font-medium leading-tight tracking-wide">{studentData?.studentId}</p>
						</div>

						{/* Address */}
						<div className="bg-gray-100 border border-gray-200 rounded-md px-3 py-1.5">
							<label className="block text-xs text-gray-500 font-medium mb-0.5">Address</label>
							<p className="text-[13px] text-gray-700 leading-snug line-clamp-2">{studentData?.fullAddress}</p>
						</div>
					</div>
				</div>
			</div>

			{/* buttons */}
			<div className="mt-4.5 flex items-center gap-2.5">
				<button className="bg-orange-500 text-white px-4 py-3 h-fit rounded-md flex items-center gap-2 text-base font-medium hover:opacity-75" onClick={handleDownload}>
					<Download size="1.2rem" /> Download ID Card
				</button>
				<button className="bg-slate-600/80 hover:bg-slate-700 text-white px-5 py-3 rounded-md text-base font-medium" onClick={handleCloseModel}>
					Close
				</button>
			</div>
		</>
	);
};

export default StudentIdCard;
