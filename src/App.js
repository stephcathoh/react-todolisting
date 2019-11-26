import React, { Component } from 'react';
import TaskList from './TaskList.js';
import Date from './Date.js';
import Avatar from './Avatar.js';
import AddButton from './AddButton.js';
import TodoForm from './TodoForm.js';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name:'Coding Tracking - To Do List',
      count: 0,

      tasks: [
          {
              'time': '12',
              'period': 'AM',
              'activity_title': 'Finish React exercises',
              'activity_description': '#Learning'
          }, {
           
            'time': '7',
            'period': 'AM',
            'activity_title': 'Yoga',
            'activity_description': '#Health'
        }, {
              'time': '9',
              'period': 'AM',
              'activity_title': 'Continue JS course',
              'activity_description': '#Education'
          }, {
              'time': '11',
              'period': 'AM',
              'activity_title': 'Learn Flexbox',
              'activity_description': '#Skill'
          }, {
              'time': '3',
              'period': 'PM',
              'activity_title': 'To Do List tutorial',
              'activity_description': '#Practise'
          }, {
              'time': '6',
              'period': 'PM',
              'activity_title': 'Back up files',
              'activity_description': '#Maintenance'
          }    
      ],
      task:  {
        'time': '',
        'period': '',
        'activity_title': '',
        'activity_description': ''
      }
    };
  }
  addTask(event) {
    var task= this.state.task;
    var tasks = this.state.tasks.concat(task);
    this.setState({tasks: tasks, task: ''});
  }

  removeTask() {

  }
  render() {
    return (
      <div style={{padding: '30px 30px'}}>
          <Avatar />
          <br />
          <Date />
          <br />
          <TaskList tasks={this.state.tasks} />
          <br />
          <TodoForm />
          <AddButton onClick={this.addTask.bind(this)}/>
  
         
      </div>
    );
  }
}

export default App;