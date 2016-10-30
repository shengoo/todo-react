import React from 'react';


let element = (
<form className="form-inline">
  <div className='row'>
    <div className='col-md-12'>
      <div className="form-group has-error">
        <div className="input-group">
            <input type="text" className="form-control" placeholder="new todo" />
            <span className="input-group-btn2 clear">
              <button className="btn btn-default" type="button">add</button>
            </span>
        </div>
        <span id="helpBlock2" className="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
      </div>
    </div>
  </div>
</form>);

export default class AddTodo extends React.Component{

    render(){
        return element;
    }

}
