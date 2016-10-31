import {EventEmitter} from 'events';

import dispatcher from '../dispatcher';
import {CREATE_TODO,DELETE_TODO} from '../constants';


class TodoStore extends EventEmitter{
    constructor(){
        super();

        this.todos = [
            {
                id:1,
                title: 'one',
                done: false
            }, {
                id:2,
                title: 'a todo item',
                done: false
            }, {
                id:3,
                title: '2 done item',
                done: true
            }
        ];

    }

    getAll(){
        return this.todos;
    }

    createTodo(title){
        const id = Date.now();
        this.todos.push({
            id,
            title,
            done:false
        });
        this.emit('change');
    }

    deleteTodo(id){
        var index = this.todos.findIndex(todo=>todo.id === id);
        if(index > -1){
            this.todos.splice(index,1);
            this.emit('change');
        }
    }

    handleActions(action){
        // console.log('TodoStoer received an action', action);
        switch (action.type){
            case CREATE_TODO:{
                this.createTodo(action.title);
                break;
            }
            case DELETE_TODO:{
                this.deleteTodo(action.id);
                break;
            }
        }
    }

}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));

window.todoStore = todoStore;
window.dispatcher = dispatcher;

export default todoStore;