import React from 'react';

import Todo from './Todo';
import TodoStore from '../stores/TodoStore';


export default class TodoList extends React.Component {

    constructor(){
        super();
        this.getTodos = this.getTodos.bind(this);
        this.state = {
            todos:　TodoStore.getAll()
        };
    }

    componentWillMount(){
        TodoStore.on('change',this.getTodos);
    }

    componentWillUnmount(){
        TodoStore.removeListener('change',this.getTodos);
    }

    getTodos(){
        this.setState({
            todos:TodoStore.getAll()
        });
    }

    render() {

        const{todos} = this.state;
        const TodoComponents = todos.map((todo) =>{
           return <Todo key={todo.id} {...todo}/>;
        });

        return (
            <div className="weui-cells weui-cells_checkbox">
                {/*{getListTemplate(todoList)}*/}
                {TodoComponents}
            </div>
        )
    }

}
