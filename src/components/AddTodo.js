import React from 'react';



export default class AddTodo extends React.Component{

    render(){
        return <div>
          <input type="text" placeholder="new todo" />
          <button>add</button>
        </div>
    }

}
