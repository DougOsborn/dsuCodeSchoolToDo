"use strict";

var React = require("react");

var AboutPage = React.createClass({

	render: function() {
		return(
			<div>
				<h1>Cool Stuff  We Are  Learning </h1>
				<p> We are going to be using these technologies </p>

				<ul>
					<li>Gulp</li>
					<li>React</li>
					<li>React-Router</li>
					<li>Node</li>
					<li>Browserify</li>										
				</ul>

			</div>

		);
	}
});

module.exports : AboutPage