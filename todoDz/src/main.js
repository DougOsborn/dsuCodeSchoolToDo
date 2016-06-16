"use strict";

var $, jQuery;

var jQuery = require("jquery");

var React = require("react");

var ReactDOM = require("react-dom");

var HomePage = require("./components/homePage");

var Header = require("./components/common/header");

var AboutPage = require("./components/about/about");

var TodoPage = require(".components/todos/todoPage");

var App = React.createClass({

	render: function() {
		return(
			<div>
				< Header />
				< HomePage />
				< AboutPage />
                < TodoPage />
			</div>
		);
	}

});


ReactDOM.render(<App />, document.getElementById("app"));

