const GradientTags = (props) => {
	const { tags, filter, setFilter } = props
	return (
		<div className="mt-3">
			{tags.sort().map((el) => (
				<button
					type="button"
					className="btn btn-sm me-2 mb-2 bg-dark text-white"
					filter={filter}
					onClick={() => setFilter(el)}
					key={el}
					disabled={el === filter}
				>
					{el}
				</button>
			))}
		</div>
	)
}

export default GradientTags
