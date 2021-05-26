import React, {Component} from 'react';
import './CreateToDo.css';

class CreateToDo extends Component{
    constructor(props){
        super(props);
        this.state = {title: "", description: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleChange(e){
        console.log({[e.target.name]: e.target.value})
        return this.setState({[e.target.name]: e.target.value})
    };
    handleSubmit(e){
        e.preventDefault();
        return this.props.addToDo(this.state);
    }
    render(){
        return (
            <div className="create-to-do-form">
                <form onSubmit={this.handleSubmit}>
                    <label className="title-label">
                        title
                        <div className="text-input-wrapper">
                            <input type="text" name="title" value={this.state.title}
                              onChange={this.handleChange}/>
                        </div>
                    </label>
                    <label className="description">
                        description
                        <div className="description-input-wrapper">
                        <textarea name="description" value={this.state.description}
                         onChange={this.handleChange}/>
                        </div>
                    </label>
                    <div className="form-actions">
                        <div className="collapse-minus-container">
                            <span className="collapse-minus" onClick={this.props.cancel}>X</span>
                        </div>
                        <div className="form-submit">
                            <input type="submit" value="create"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
};

export default CreateToDo;