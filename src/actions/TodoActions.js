import dispatcher from '../dispatcher';

import {CREATE_TODO,DELETE_TODO} from '../constants';


export function createTodo(title) {
    dispatcher.dispatch({
        type:CREATE_TODO,
        title
    });
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type:DELETE_TODO,
        id
    })
}