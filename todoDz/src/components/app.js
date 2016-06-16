'use strict';

var React;
React = require('react');

var Header;
Header = require('./common/Header');


var App = React.createClass({
	render: function () {
		return (
			<div>
				<Header />
				{this.props.children}
			</div>
		);
	}
});

module.exports = App;