import React, {Component} from 'react';
import './ToDoFormVersion.css';

class ToDoFormVersion extends Component{
    constructor(props){
        super(props);
        this.state = {title: "", description: ""};
        this.handleChange = this.handleChange.bind(this);
    };
    handleChange(e){
        return this.props.handleChange({[e.target.name]: e.target.value})
    }
    render(){
        return (
            <div className="form-version-container">
                <input type="text" className="title-edit" name="title" value={this.props.title} 
                onChange={this.handleChange}/>
                <textarea type="text" className="description-edit" name="description"
                value={this.props.description} onChange={this.handleChange}/>
            </div>
        )
    }
};

export default ToDoFormVersion;