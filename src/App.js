import React, {Component} from 'react';
import './App.css';
import ToDoContainer from './ToDoContainer.js';
import CompletedContainer from './CompletedContainer.js';
import getID from './stateSelectors/getID.js';

class App extends Component{
  constructor(props){
    super(props);
    //taskIDs array is implemented to preserve order of creation
    this.state = {tasks: {}, taskIDs: []}; //tasks: {id: {...task}}
    this.addToDo = this.addToDo.bind(this);
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  };
  addToDo(task){
    return this.setState((state) => {
      return {
        tasks: {...state.tasks, [getID(task)]: {...task, completed: false}},
        taskIDs: [...state.taskIDs, getID(task)]
      };
    })
  };
  save(title, description){
    return this.setState((state) => {
      return {tasks: {...state.tasks, [title]: {...state.tasks[title], description: description}}}
    })
  };
  delete(title){
    //remove todo from normalized tasks object
    let tasks = {...this.state.tasks};
    delete tasks[title];
    //remove todo id from taskIDs
    let taskIDs = [...this.state.taskIDs];
    taskIDs.splice(taskIDs.indexOf(title), 1);
    console.log(taskIDs, tasks);
    console.log(title);
    return this.setState({
      tasks: tasks,
      taskIDs: taskIDs
    });
  };
  changeStatus(title, completed){
    let tasks = this.state.tasks;
    return this.setState({tasks: {...tasks, [title]: {...tasks[title], completed}}});
  };
  render(){
    console.log(this.state);
    return (
      <div className="app-container">
        <ToDoContainer tasks={this.state.tasks} taskIDs={this.state.taskIDs} 
        addToDo={this.addToDo} save={this.save} delete={this.delete} 
        changeStatus={this.changeStatus} />
        <CompletedContainer tasks={this.state.tasks} taskIDs={this.state.taskIDs} save={this.save}
        delete={this.delete} changeStatus={this.changeStatus}/>
      </div>
    )
  }
};

export default App;
