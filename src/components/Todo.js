import React from 'react';

import * as TodoActions from '../actions/TodoActions';

export default class Todo extends React.Component {

    constructor(props){
        super(props);
        this.state = {done:this.props.done};
        this.statusChanged = this.statusChanged.bind(this);
    }

    statusChanged(event){
        const done = event.target.checked;
        this.setState({done});
    }

    deleteTodo(){
        // console.log(this.props)
        const {id} = this.props;
        TodoActions.deleteTodo(id);
    }


    render() {

        const {title} = this.props;
        const {done} = this.state;

        // console.log(this.props);

        return (
            <div className="weui-cell weui-check__label">
                <label className="weui-cell__hd">
                    <input type="checkbox" className="weui-check"
                            checked={done}
                    onChange={this.statusChanged}/>
                    <i className="weui-icon-checked"></i>
                </label>

                <div className="weui-cell__bd">
                    <p>{title}</p>
                </div>

                <div className="weui-cell__ft" onClick={this.deleteTodo.bind(this)}>
                    x
                </div>
            </div>
        );
    }

}