import React, {Component} from 'react';
import './ToDo.css';
import ToDoContent from './ToDoContent.js';
import {COPY} from './dropEffects.js';

class ToDo extends Component{
    constructor(props){
        super(props);
        this.deleteToDo = this.deleteToDo.bind(this);
        this.editToDo = this.editToDo.bind(this);
        this.normal = this.normal.bind(this);
        //initialize title and description
        this.state = {editable: false, title: this.props.title, description: this.props.description};
        this.handleChange = this.handleChange.bind(this);
        this.save = this.save.bind(this);
        this.drag = this.drag.bind(this);
    };
    handleChange(toDoInput){
        return this.setState((state) =>{
            return {
                ...state, 
                ...toDoInput
            };
        })
    };
    deleteToDo(e){
        this.props.delete(this.props.title);
    };
    editToDo(e){
        return this.setState({editable: false})
    };
    normal(e){
        return this.setState((state) => {
            return {editable: !state.editable}
        })
    };
    save(e){
        this.setState({editable: false});
        return this.props.save(this.state.title, this.state.description)
    };
    drag(e){
        e.dataTransfer.setData("title", this.props.title);
        e.dataTransfer.effectAllowed = COPY;
    };
    render(){ 
        console.log(this.props.description, this.state.description);
        const editOrCancel = (this.state.editable)? (<h5 className="cancel" 
        onClick={this.normal}>cancel</h5>): 
        (<h5 className="normal" onClick={this.normal}>edit</h5>);
        const removeOrSave= (this.state.editable) ? (
            <h5 className="save" onClick={this.save} >
                save
            </h5>): <h5 className="delete" onClick={this.deleteToDo}>remove</h5>
        const title = (this.state.editable && this.state.title)? (this.state.title): this.props.title;
        const description = (this.state.editable && this.state.description)? (this.state.description)
        : this.props.description;
        return (
            <div className="todo-item-container" onDragStart={this.drag} draggable>
                <ToDoContent title={title} description={description} 
                editable={this.state.editable} handleChange={this.handleChange}/>
                <div className="edit-or-container">
                    {editOrCancel}
                    {removeOrSave}
                </div>
            </div>
        )
    }
};

export default ToDo