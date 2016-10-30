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
    return <li className="list-group-item row">
      <div className="col-xs-2">
        <input type="checkbox" aria-label="..." />
      </div>
      <div className='col-xs-8'>{todo.title}</div>
      <div className="col-xs-2">
          <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
      </div>
    </li>;
}

export default class TodoList extends React.Component{

    render(){
        return <ul className="list-group">
          {getListTemplate(todoList)}
        </ul>
    }

}
