import React, {Component} from 'react';
import './App.css';

import Header from  './components/Header';

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

const element = (
        <div>
            <h1>Todos</h1>
            <ul>
                {getListTemplate(todoList)}
            </ul>
        </div>
    )
    ;

class App extends Component {
    render() {
        return <div>
            <Header/>
        </div>;
    }
}

export default App;
