import { uniqueTags } from "../gradients"

const GradientSelect = (props) => {
	const { setFilter, filter } = props

	const handleSelectChange = (event) => {
		setFilter(event.target.value)
	}
	return (
		<div className="input-group mb-3">
			<label className="input-group-text" htmlFor="select">
				Filtrer par tag
			</label>
			<select
				className="form-select"
				id="select"
				onChange={handleSelectChange}
				value={filter}
			>
				<option value="all">Tous</option>
				{uniqueTags.map((el) => (
					<option value={el}>{el}</option>
				))}
			</select>
		</div>
	)
}

export default GradientSelect
