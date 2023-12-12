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
			className={`fa ml-3 mt-[3px] ${id} ${size} ${color} ${rotate} ${active}`}
			aria-hidden="true"
			{...props}
		></i>
	)
}
