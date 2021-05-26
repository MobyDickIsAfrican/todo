import React, {Component} from 'react';
import ToDoTextVersion from './ToDoTextVersion.js';
import ToDoFormVersion from './ToDoFormVersion.js';

class ToDoContent extends Component{
    render(){
        console.log(this.props.description);
        const version = (this.props.editable)? 
        (<ToDoFormVersion description={this.props.description} title={this.props.title}  
            handleChange={this.props.handleChange}/>): 
        (<ToDoTextVersion description={this.props.description} title={this.props.title}
            handleChange={this.props.handleChange}/>);
        return version;
    }
};

export default ToDoContent;