const MainSkeleton = () => {
	return (
		<div className="w-screen h-screen dark:bg-bg-surface-dark p-5">
			<div className="w-full h-full space-y-4 animate-pulse flex gap-5">
				{/* Navigation - Left side */}
				<div className="h-full w-[8.9rem] bg-bg-dark rounded-xl p-5 flex flex-col gap-5">
					{Array(6).fill(0).map(() => {
						return <div className="h-full w-full bg-dark-one/80 rounded-lg" />
					})}
				</div>
				{/* Main content - Right side */}
				<div className="h-full flex-1 bg-bg-dark rounded-xl p-7 flex flex-col">
					<div className="h-6 w-1/11 bg-dark-one/80 rounded-lg mb-5" />
					<div className="h-full w-full bg-dark-one/80 rounded-lg" />
				</div>
			</div>
		</div>
	);
};

export default MainSkeleton;
