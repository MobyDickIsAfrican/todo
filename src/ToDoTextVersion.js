import React, {Component} from 'react';
import './ToDoTextVersion.css';

class ToDoTextVersion extends Component{
    render(){ 
        return (
            <div className="todo-content">
                <h4 className="todo-title">
                    {this.props.title}
                </h4>
                <div className="todo-description">
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
};

export default ToDoTextVersion;