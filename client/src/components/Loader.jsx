import { Icon } from './Icon'

export const Loader = () => {
	return (
		<div className="pt-[25%] text-center text-blue-800  min-h-screen">
			<div>
				<Icon id="fa-refresh fa-spin" size="fa-5x" active={false} />
			</div>
			<span className="text-2xl">Loading...</span>
		</div>
	)
}
