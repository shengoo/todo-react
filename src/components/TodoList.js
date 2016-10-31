import React from 'react';


const todoList = [
    {
        title: 'one',
        done: false
    }, {
        title: 'a todo item',
        done: false
    }, {
        title: 'a done item',
        done: true
    }
];

function getListTemplate(list) {
    return list.map(formatTodo);
}
function formatTodo(todo) {
    return (
        <div className="weui-cell weui-check__label">
            <label className="weui-cell__hd">
                <input type="checkbox" className="weui-check"/>
                <i className="weui-icon-checked"></i>
            </label>

            <div className="weui-cell__bd">
                <p>{todo.title}</p>
            </div>

            <div className="weui-cell__ft">
                x
            </div>
        </div>);
}

export default class TodoList extends React.Component {

    render() {
        return (
            <div className="weui-cells weui-cells_checkbox">
                {getListTemplate(todoList)}
            </div>
        )
    }

}
