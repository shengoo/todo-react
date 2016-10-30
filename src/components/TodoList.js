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
    return <li>
        {todo.title}
    </li>;
}

export default class TodoList extends React.Component{

    render(){
        return <ul>
          {getListTemplate(todoList)}
        </ul>
    }

}
