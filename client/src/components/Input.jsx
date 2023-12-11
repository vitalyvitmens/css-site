import { forwardRef } from 'react'

export const Input = forwardRef(({ autoComplete, ...props }, ref) => {
	return (
		<input
			className={`flex flex-col mb-2 w-80 h-8 py-2 px-4 mx-auto text-lg border border-solid border-[#000] rounded-[10px] bg-[antiquewhite]`}
			{...props}
			ref={ref}
			autoComplete="on"
		/>
	)
})
