"use strict";

var JQuery;
JQuery = require("jquery");

var React;
React = require("react");

var ReactDOM;
ReactDOM = require("react-dom");

var Router;
Router = require('react-router').Router;

var hashHistory;
hashHistory = require('react-router').hashHistory;

var routes;
routes = require('./routes');

ReactDOM.render(
    <Router history={hashHistory}>
        {routes}
    </Router>
    , document.getElementById('app')
);

ReactDOM.render(<App />, document.getElementById("app"));
