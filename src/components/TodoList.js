import React from 'react';

import Todo from './Todo';
import TodoStore from '../stores/TodoStore';


export default class TodoList extends React.Component {

    constructor(){
        super();
        this.state = {
            todos:　TodoStore.getAll()
        };
    }

    componentWillMount(){
        console.log('componentWillMount');
        TodoStore.on('change',()=>{
            this.setState({
                todos:TodoStore.getAll()
            });
        })
    }

    render() {

        const{todos} = this.state;
        const TodoComponents = todos.map((todo,i) =>{
           return <Todo key={i} {...todo}/>;
        });

        return (
            <div className="weui-cells weui-cells_checkbox">
                {/*{getListTemplate(todoList)}*/}
                {TodoComponents}
            </div>
        )
    }

}
