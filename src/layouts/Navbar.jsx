import {ChartLine, CreditCard, GraduationCap, Landmark, Presentation, Settings, User, UserRound, Wallet} from "lucide-react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
	const handleActiveLink = (e) => {
		const baseStyle = "flex flex-col items-center gap-2 py-5 px-3 rounded-lg ";
		const activeStyle = "dark:bg-[#1F2A38] dark:text-[#58A6FF] hover:dark:bg-[#1E2A38]";

		return e.isActive ? `${baseStyle} ${activeStyle}` : `${baseStyle} dark:bg-bg-surface-dark hover:dark:bg-[#1A2230] transition duration-100`;
	};

	return (
		<div className="sticky top-5 w-fit h-[calc(100vh-2.5rem)] overflow-hidden rounded-2xl">
			{/* Navbar Scrollable Content */}
			<nav className="w-full h-full flex flex-col gap-5 dark:bg-bg-dark dark:text-text-main-dark p-5 overflow-y-auto overflow-x-hidden shadow-lg" style={{scrollbarWidth: "none"}}>
				<NavLink to="/" className={handleActiveLink}>
					<ChartLine /> Dashboard
				</NavLink>
				<NavLink to="/students" className={handleActiveLink}>
					<UserRound /> Students
				</NavLink>
				<NavLink to="/courses" className={handleActiveLink}>
					<GraduationCap /> Courses
				</NavLink>
				<NavLink to="/classes" className={handleActiveLink}>
					<Presentation /> Classes
				</NavLink>
				<NavLink to="/payments" className={handleActiveLink}>
					<CreditCard /> Payments
				</NavLink>
				<NavLink to="/teachers" className={handleActiveLink}>
					<User /> Teachers
				</NavLink>
				<NavLink to="/expenses" className={handleActiveLink}>
					<Wallet /> Expenses
				</NavLink>
				<NavLink to="/salaries" className={handleActiveLink}>
					<Landmark /> Salaries
				</NavLink>
				<NavLink to="/settings" className={handleActiveLink}>
					<Settings /> Settings
				</NavLink>
			</nav>

			{/* Shadow Overlay */}
			<div className="pointer-events-none absolute left-0 bottom-0 w-full h-20 bg-gradient-to-t from-black/10 to-transparent z-10 rounded-b-xl" />
		</div>
	);
};

export default Navbar;
