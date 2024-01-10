export const Select = ({
	id,
	title,
	className,
	constantsObject,
	stateValue,
	stateFn,
}) => {
	return (
		<div className="flex flex-row gap-2">
			<label htmlFor={id}>{title}</label>
			<select
				id={id}
				className={className}
				value={stateValue}
				onChange={(e) => stateFn(e.target.value)}
			>
				{Object.keys(constantsObject).map((key) => (
					<option key={key} value={key}>
						{key}
					</option>
				))}
			</select>
		</div>
	)
}
