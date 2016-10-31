import React from 'react';

import * as TodoActions from '../actions/TodoActions';




export default class AddTodo extends React.Component{


    constructor(){
        super();
    }

    createTodo(){
        TodoActions.createTodo(Date.now());
    }

    render(){
        const element = (
            <div className="weui-cells weui-cells_form">
                <div className="weui-cell weui-cell_vcode">
                    <div className="weui-cell__hd">
                        <label className="weui-label">Add a todo:</label>
                    </div>
                    <div className="weui-cell__bd">
                        <input className="weui-input" type="text" placeholder="new todo" />
                    </div>
                    <div className="weui-cell__ft">
                        <a className="weui-btn weui-btn_mini weui-btn_primary" onClick={this.createTodo.bind(this)}>Add</a>
                    </div>
                </div>
            </div>
        );
        return element;
    }

}


{/*<form className="form-inline">*/}
    {/*<div className='row'>*/}
        {/*<div className='col-md-12'>*/}
            {/*<div className="form-group has-error">*/}
                {/*<div className="input-group">*/}
                    {/*<input type="text" className="form-control" placeholder="new todo" />*/}
                    {/*<span className="input-group-btn2 clear">*/}
              {/*<button className="btn btn-default" type="button">add</button>*/}
            {/*</span>*/}
                {/*</div>*/}
                {/*<span id="helpBlock2" className="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>*/}
            {/*</div>*/}
        {/*</div>*/}
    {/*</div>*/}
{/*</form>*/}