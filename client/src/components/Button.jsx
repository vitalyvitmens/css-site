export const Button = ({
	title,
	onClick,
	disabled,
	children,
	color = 'text-[antiquewhite]',
	bgColor = 'bg-red-600',
	fontSize = 'text-base',
	margin = 'mt-4',
}) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`flex m-auto px-4 py-2 ${fontSize} ${color} ${bgColor} ${margin} tracking-[.05em] rounded-md shadow-[-2px_5px_5px_black] hover:opacity-80 active:shadow-none active:border active:border-solid active:border-black ${
				disabled && 'opacity-50 hover:opacity-50'
			}`}
		>
			{title || children}
		</button>
	)
}
