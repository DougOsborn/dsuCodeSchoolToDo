"use strict";

var React = require("react");

var Header = require("./common/header")

var App = React.createClass({

	render: function ()
	{

		return(

			<Header/>
			{this.props.children}


		);
	}
});