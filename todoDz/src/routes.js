"use strict";

var React = require("react");

var Route = require(" react-router").Route;

var IndexRoute = require("react-router").IndexRoute;

var HomePage = require("./components/homePage");

var AboutPage = require("./components/about/about");

var routes = (
	<Route   path= "/" component={App} >

		<IndexRoute component={HomePage} />

		<Route path="/about" component= {AboutPage} />

	</route>

	);

module.exports : routes