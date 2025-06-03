const DashboardHeader = () => {
	return (
		<div className="bg-zinc-50 rounded-lg p-12 flex flex-col justify-center items-center gap-1">
			<div className="bg-white p-4 rounded-full overflow-hidden w-[7.5rem] aspect-square flex justify-center items-center">
				<img src="https://avatars.githubusercontent.com/u/69582226?v=4" alt="institute logo" className="w-full h-full" />
			</div>
			<strong className="block text-2xl mt-3">Sheryians Coding School</strong>
			<p className="text-lg text-zinc-500">We only teach what we are really really good at.</p>
		</div>
	);
};

export default DashboardHeader;
