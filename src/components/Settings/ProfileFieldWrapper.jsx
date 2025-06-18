const ProfileFieldWrapper = ({extraStyles, children}) => {
  return (
	<div className={`${extraStyles} flex gap-18 dark:bg-bg-dark/70 border border-dark-one p-6 rounded-xl`}>{children}</div>
  )
}

export default ProfileFieldWrapper