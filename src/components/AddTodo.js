import React from 'react';

import * as TodoActions from '../actions/TodoActions';




export default class AddTodo extends React.Component{


    constructor(){
        super();
        this.state = {title:''};
        this.handleChange = this.handleChange.bind(this);
    }

    createTodo(){
        if(!this.state.title)
            return;
        TodoActions.createTodo(this.state.title);
        this.setState({title:''});
    }

    handleChange(event) {
        this.setState({title: event.target.value});
    }


    render(){
        return (
            <div className="weui-cells weui-cells_form">
                <div className="weui-cell weui-cell_vcode">
                    <div className="weui-cell__hd">
                        <label className="weui-label">Add a todo:</label>
                    </div>
                    <div className="weui-cell__bd">
                        <input className="weui-input" type="text" placeholder="new todo"
                               value={this.state.title}
                               onChange={this.handleChange}/>
                    </div>
                    <div className="weui-cell__ft">
                        <a className="weui-btn weui-btn_mini weui-btn_primary" onClick={this.createTodo.bind(this)}>Add</a>
                    </div>
                </div>
            </div>
        );
    }

}
