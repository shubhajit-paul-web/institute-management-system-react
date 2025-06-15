import { LogOut } from "lucide-react";

const LogoutBtn = () => {
	return <button className="bg-red-500 hover:bg-red-500/75 text-white py-2 px-4 rounded-md shadow inline-flex items-center gap-2 mt-10"><LogOut size="1.2rem" /> Logout</button>;
};

export default LogoutBtn;
