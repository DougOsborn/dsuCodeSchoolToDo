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

var App = require('./components/App');
var TodoPage = require('./components/todos/TodoPage');

var routes = (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="/about" component={AboutPage} />
		<Route path="/todos" component={TodoPage} />
	</Route>
);


module.exports = routes;

