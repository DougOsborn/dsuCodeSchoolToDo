"use strict";

var React = require("react");

var Header = React.createClass({
	render : function () {
		return(
			<div className = "navbar navbar-default">
			<div className = "container-fluid">
			<a href = "/" className = "navbar-brand">Todo App</a>
			<ul className = "nav navbar-nav">

				<li><a href="/">Home</a></li>
				<li><a href="/#about">About</a></li>

			</ul>
			</div>
			</div>

		);

	}
});

module.exports = Header;