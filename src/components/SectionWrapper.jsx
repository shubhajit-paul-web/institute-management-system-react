const SectionWrapper = ({extraStyles, children}) => {
	return <div className={`w-full dark:bg-bg-surface-dark border dark:border-dark-one p-5 rounded-xl overflow-x-auto mt-5 ${extraStyles}`} style={{contain: "layout inline-size"}}>{children}</div>;
};

export default SectionWrapper;
