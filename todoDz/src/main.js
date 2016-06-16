"use strict";

var jQuery;
jQuery = require("jquery");

var React;
React = require("react");

var ReactDOM;
ReactDOM = require("react-dom");

var HomePage;
HomePage = require("./components/homePage");

var Header;
Header = require("./components/common/header");

var AboutPage;
AboutPage = require("./components/about/about");

var TodoPage;
TodoPage = require("./components/todos/todoPage");

var App;
App = React.createClass({

    render: function () {
        return (
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

