'use strict';

var React;
React = require("react");

var Home;
Home = React.createClass({
	render: function () {
		return (
			<div className="jumbotron">
				<h1> Code School React app </h1>

				<p> This is from the Home Page js file </p>
			</div>
		);
	}
});

module.exports = Home;