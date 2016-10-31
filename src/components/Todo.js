import React from 'react';

import * as TodoActions from '../actions/TodoActions';

export default class Todo extends React.Component {

    deleteTodo(){
        // console.log(this.props)
        const {id} = this.props;
        TodoActions.deleteTodo(id);
    }


    render() {

        const {title,done} = this.props;

        // console.log(this.props);

        return (
            <div className="weui-cell weui-check__label">
                <label className="weui-cell__hd">
                    <input type="checkbox" className="weui-check"/>
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