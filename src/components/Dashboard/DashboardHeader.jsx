const DashboardHeader = () => {
	return (
		<div className="dark:bg-bg-surface-dark border dark:border-dark-one rounded-2xl p-12 flex flex-col justify-center items-center gap-1">
			<div className="bg-white p-4 rounded-full overflow-hidden w-[7.5rem] aspect-square flex justify-center items-center">
				<img src="https://avatars.githubusercontent.com/u/69582226?v=4" alt="institute logo" className="w-full h-full" />
			</div>
			<strong className="block text-[1.6rem] mt-3 dark:text-zinc-50">Sheryians Coding School</strong>
			<p className="text-lg dark:text-zinc-300">We only teach what we are really really good at.</p>
		</div>
	);
};

export default DashboardHeader;
