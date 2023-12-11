export const H2 = ({
	children,
	color = 'text-blue-900',
	fontSize = 'text-3xl',
	fontWeight = 'font-semibold',
}) => {
	return (
		<h2 className={`my-8 ${color} ${fontSize} ${fontWeight}`}>{children}</h2>
	)
}
