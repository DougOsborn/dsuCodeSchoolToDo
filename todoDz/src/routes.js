`use strict`;

var React;
React = require("react");

var Route;
Route = require("react-router").Route;

var IndexRoute;
IndexRoute = require("react-router").IndexRoute;

var HomePage;
HomePage = require("./components/homePage");

var AboutPage;
AboutPage = require("./components/about/about");

var App;
App = require('./components/app');

var TodoPage;
TodoPage = require('./components/todos/todoPage');

var routes = (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="/about" component={AboutPage} />
		<Route path="/todos" component={TodoPage} />
	</Route>
);


module.exports = routes;

