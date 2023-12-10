import { Icon } from './Icon'

export const Loader = () => {
	return (
		<div className="m-auto pt-28 text-blue-800">
			<div>
				<Icon id="fa-refresh fa-spin" size="fa-5x" active={false} />
			</div>
			<span className="text-2xl">Loading...</span>
		</div>
	)
}
