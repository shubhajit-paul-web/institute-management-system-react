const SkeletonBlock = ({width = "w-full", height = "h-10", bgColor = "dark:bg-bg-dark", className, children}) => {
	return <div className={`${width} ${height} ${bgColor} ${className} rounded-lg animate-pulse`}>{children}</div>;
};

export default SkeletonBlock;
