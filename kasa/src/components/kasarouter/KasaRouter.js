import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import Rental from "../../pages/rental/Rental";
import About from "../../pages/about/About";
import Error from "../../pages/error/Error";

class KasaRouter extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/">
					<Home rentals={this.props.rentals} />
				</Route>
				<Route exact path="/rental/:id">
					<Rental rentals={this.props.rentals} />
				</Route>
				<Route exact path="/about">
					<About />
				</Route>
				<Route>
					<Error />
				</Route>
			</Switch>
		);
	}
}

export default KasaRouter;