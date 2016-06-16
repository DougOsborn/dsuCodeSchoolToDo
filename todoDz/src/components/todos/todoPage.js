'use strict';

var React = require('react');

var TodoAPI = require("../../mockAPI/todoAPI");



var Todos = React.createClass({

    getInitialState: function () {
        return {
            todos: []
        }

    },

    componentWillMount: function () {
        this.setState({
            todos: todoAPI.getAllTodos()
        });

    },



    render: function () {
        var createTodoRow = function (todo) {

            return(

                <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td>{todo.description}</td>
                </tr>

            );



        };
        return (
            <div>
                <h2>Things we need todo</h2>
                <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Desc</th>
                    </tr>
                </thead>

                    <tbody>

                    {this.state.todos.map(createTodoRow, this)}

                    </tbody>


                </table>
            </div>
        );
    }
});

module.exports = Todos;