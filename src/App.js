import React, { Component } from "react";
import Routes from "./Routes";
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
import "./App.css";

export default class App extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<Routes />
				<Footer />
			</div>
		);
	}
}
