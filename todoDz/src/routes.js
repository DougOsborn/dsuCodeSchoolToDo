`use strict`;

var React;
React = require("react");

var Route;
Route = require(" react-router").Route;

var IndexRoute;
IndexRoute = require("react-router").IndexRoute;

var HomePage;
HomePage = require("./components/homePage");

var AboutPage;
AboutPage = require("./components/about/about");

var routes;
routes = (
	<Route path="/" component={App}>

		<IndexRoute component={HomePage}/>

		<Route path="/about" component={AboutPage}/>

	</route>

);

module.exports : routes