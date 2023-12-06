export const Icon = ({
	id = 'fa-bug',
	active = 'hover:cursor-pointer hover:opacity-80',
	color = 'text-blue-900',
	size = 'fa-lg',
	rotate = 'normal',
	...props
}) => {
	return (
		<i
			className={`fa ${id} ${size} ${color} ${rotate} ${active}`}
			aria-hidden="true"
			{...props}
		></i>
	)
}
