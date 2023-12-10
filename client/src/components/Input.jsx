import { forwardRef } from 'react'

export const Input = ({
	width = 'w-[100%]',
	height = 'h-[40px]',
	margin = 'my-1',
	ref = forwardRef(),
	...props
}) => {
	return (
		<input
			className={`p-[10px] text-lg border border-solid border-[#000] rounded-[10px] bg-[antiquewhite] ${width} ${height} ${margin}`}
			{...props}
			ref={ref}
		></input>
	)
}
