"use strict";

var React;
React = require("react");

var Header;
Header = require("./common/header");

var App;
App = React.createClass({

	render: function () {

		return (

			<Header/>
		{
			this.props.children
		}


		)
		;
	}
});