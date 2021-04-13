import GrandientsApp from "./components/GradientsApp"
import GradientsHeader from "./components/GrandientsHeader"

function App() {
	return (
		<div className="min-vh-100 d-flex flex-column">
			<GradientsHeader>
				<h1 className="display-1">Alyra Gradients</h1>
				<p className="tagline">Ultime collection de plus beaux dégradés</p>
			</GradientsHeader>
			<GrandientsApp />
		</div>
	)
}

export default App
