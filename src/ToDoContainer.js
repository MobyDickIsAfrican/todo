import React, {Component} from 'react';
import CreateToDo from './CreateToDo.js';
import ToDoItems from './ToDoItems.js'
import './ToDoContainer.css';

class ToDoContainer extends Component{
    constructor(props){
        super(props);
        this.addToDo = this.addToDo.bind(this);
        this.state = {showForm: false};
        this.handleClick = this.handleClick.bind(this);
        this.dragOver = this.dragOver.bind(this);
        this.onDrop = this.onDrop.bind(this);
    };
    dragOver(e){
        e.stopPropagation();
        let types = e.dataTransfer.types;
        // check if data transferred by drag event is the required data
        if(types.find(type => {return type ==="title"})){
            e.preventDefault();
        };
    };
    onDrop(e){
        e.stopPropagation();
        const title = e.dataTransfer.getData("title");
        //handleChange takes a boolean, true=completed, false=not_completed
        this.props.changeStatus(title, false);
    }
    addToDo(task){
        this.setState((state) =>{
            return {showForm: !state.showForm}
        });
        return this.props.addToDo(task)
    };
    handleClick(e){
        return this.setState((state) => {
            return {showForm: !state.showForm}
        })
    };
    render(){
        console.log(this.props.taskIDs);
        const formOrCallToAction = (this.state.showForm)? <CreateToDo addToDo={this.addToDo}
        cancel={this.handleClick} /> : (
            <div className="add-todo-wrapper-h4" onClick={this.handleClick}>
                <h4 className="todo-h4">add ToDo</h4>
            </div>
        )
        return (
            <div className="todo-container" onDrop={this.onDrop} onDragOver={this.onDragOver}>
                <h3>To Do List</h3>
                <div className="form-or-call-to-action" >
                    {formOrCallToAction}
                </div>
                <ToDoItems tasks={this.props.tasks} completed={false} taskIDs={this.props.taskIDs} 
                save={this.props.save} delete={this.props.delete}/>
            </div>
        )
    }
};

export default ToDoContainer;