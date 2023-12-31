export const Avatar = ({
	children,
	width = 'w-14',
	height = 'h-14',
	...props
}) => {
	return (
		<img
			className={`flex object-cover rounded-full shadow-[-1px_2px_5px_black] ${width} ${height} hover:opacity-80 hover:cursor-pointer active:opacity-60 active:shadow-none`}
			{...props}
			src={children}
			alt={children}
		/>
	)
}
