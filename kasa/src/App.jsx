import "./styles/App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import KasaRouter from "./components/kasarouter/KasaRouter";
import rentals from "./data/logements.json";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Router>
					<ScrollToTop />
					<Header></Header>
					<KasaRouter rentals={rentals}></KasaRouter>
					<Footer></Footer>
				</Router>
			</div>
		);
	}
}

export default App;