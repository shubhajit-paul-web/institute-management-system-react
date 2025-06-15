const ProfileField = ({lable, value, extraStyles}) => {
	return (
		<div className="flex flex-col gap-1">
			<label className="text-sm text-zinc-400">{lable}</label>
			<div className={`${extraStyles} dark:bg-white/8 text-white px-3.5 py-1.5 rounded-md font-semibold w-fit`}>{value}</div>
		</div>
	);
};

export default ProfileField;
