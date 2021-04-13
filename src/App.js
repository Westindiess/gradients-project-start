import GrandientsApp from "./components/GradientsApp"
import GradientsHeader from "./components/GrandientsHeader"
import Footer from "./components/Footer"

function App() {
	return (
		<div className="min-vh-100 d-flex flex-column">
			<GradientsHeader>
				<h1 className="display-1">Alyra Gradients</h1>
				<p className="tagline">Ultime collection de plus beaux dégradés</p>
			</GradientsHeader>
			<GrandientsApp />
			<Footer />
		</div>
	)
}

export default App
