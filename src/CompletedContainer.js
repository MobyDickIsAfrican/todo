import React, {Component} from 'react';
import ToDoItems from './ToDoItems.js';
import './CompletedContainer.css';

class CompletedContainer extends Component{
    constructor(props){
        super(props);
        this.dragOver = this.dragOver.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }
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
        console.log(title);
        //handleChange takes a boolean, true=completed, false=not_completed
        this.props.changeStatus(title, true);
    }
    render(){
        return (
            <div className="completed-container" onDragOver={this.dragOver} onDrop={this.onDrop}>
                <h3>Completed</h3>
                <ToDoItems completed={true} tasks={this.props.tasks} taskIDs={this.props.taskIDs}
                save={this.props.save} delete={this.props.delete}/>
            </div>
        )
    }
};

export default CompletedContainer;
