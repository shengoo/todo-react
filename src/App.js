import React, {Component} from 'react';
import './App.css';

import Header from  './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';


const element = (
  <div>
      <Header/>
      <AddTodo/>
      <TodoList/>
  </div>
);

class App extends Component {
    render() {
        return element;
    }
}

export default App;
