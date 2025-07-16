import { toPng } from "html-to-image";
import { useRef } from "react";

const StudentIdCard = () => {
  const cardRef = useRef(null);

  const handleDownload = () => {
    toPng(cardRef.current)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "student-id-card.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error(err);
      });
	}

	return (
		<>
		<div ref={cardRef} className="w-[37rem] h-fit bg-white rounded-md py-6 px-7">
			{/* Header */}
			<div className="flex justify-between border-b-2 pb-4 border-black/50">
				<div className="flex gap-5">
					<img src="https://ik.imagekit.io/sheryians/Sheryians_logo_EzwgcppnD" alt="" className="h-15" />
					<div>
						<p className="text-2xl font-bold">Sheryians Coding School</p>
						<p className="text-base">123 Anywhere St., Any City, ST 12345</p>
					</div>
				</div>
				<div className="bg-gray-600 text-white text-lg font-medium place-content-center px-5 rounded-lg">Student ID Card</div>
			</div>

			<div className="mt-6 flex gap-8">
				<img src="https://fra.cloud.appwrite.io/v1/storage/buckets/684ad854003048e26ddf/files/6859a1f6000f05df9da8/view?project=684a982d0032083c1686" alt="student photo" className="w-41 h-47 object-cover object-center rounded-md" />
				<div className="flex flex-col gap-4">
					<div>
						<label className="font-medium text-lg leading-none">Name</label>
						<p className="text-xl leading-none opacity-85">Shubhajit Paul</p>
					</div>
					<div>
						<label className="font-medium text-lg leading-none">Student ID</label>
						<p className="text-xl leading-none opacity-85">SC.AC.U3SGBAKGKS71</p>
					</div>
					<div>
						<label className="font-medium text-lg leading-none">Address</label>
						<p className="text-lg leading-none opacity-85">123 Anywhere St., Any City, ST 12345</p>
					</div>
				</div>
			</div>
		</div>
		<button className="bg-white h-fit" onClick={handleDownload}>Download PNG</button>
	</>
	);
};

export default StudentIdCard;
