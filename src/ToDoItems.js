import React, {Component} from 'react';
import completed from './stateSelectors/completed.js';
import ToDo from './ToDo.js';
import getID from './stateSelectors/getID.js';
import getTitle from './stateSelectors/getTitle.js';
import getDescription from './stateSelectors/getDescription.js';
import getTask from './stateSelectors/getTask.js';
import './ToDoItems.css';


class ToDoItems extends Component{
    getItemsForStatus(status){
        let tasks = []
        console.log(this.props.taskIDs);
        this.props.taskIDs.forEach((id) => {
            let task = getTask(this.props.tasks, id);
            console.log(completed(task), status);
            if(status===completed(task)){
                tasks.push(<ToDo key={getID(task)} title={getTitle(task)}
                    description={getDescription(task)} save={this.props.save}  
                    delete={this.props.delete}/>)
            };
        });
        console.log(tasks);
        return tasks;
    };
    render(){
        console.log(this.props.completed);
        return (
            <div className="todo-items">
                {this.getItemsForStatus(this.props.completed)}
            </div>
        )
    }
};

export default ToDoItems;