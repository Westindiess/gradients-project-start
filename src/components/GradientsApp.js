import GradientsList from "./GradientsList"
import GradientsSelect from "./GradientsSelect"
import React from "react"
import { gradients } from "../gradients"

const GradientsApp = () => {
	const [filter, setFilter] = React.useState("all")
	return (
		<>
			<h1 className="text-center my-4">Alyra Gradients</h1>
			<main className="container">
				<GradientsSelect filter={filter} setFilter={setFilter} />
				<GradientsList
					filter={filter}
					setFilter={setFilter}
					gradients={gradients}
				/>
			</main>
		</>
	)
}

export default GradientsApp
