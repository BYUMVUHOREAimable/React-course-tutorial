import React, { useState } from 'react';
import "../App.css";
import Task from './Task';

export default function ToDoList() {
  const [taskName, setTaskName] = useState("")
  const [time, setTime] = useState("")
  const [taskList, setTaskList] = useState([])

  const addTask = () => {
    setTaskList([...taskList, { task: taskName, time: time }]);
    setTaskName("")
    setTime("")
    

  }

  return (
    <div className="todolist">
      <h1>To do List</h1>
      <label>Task Name</label>
      <input type="text" id="task" onChange={(e) => {
        setTaskName(e.target.value)
      }} />
      
      <label>Time: </label>
      <input type="text" id="time" onChange={(e) => {
        setTime(e.target.value)
      }} />
      
      <button className="add" onClick={addTask} >Add</button>

      {taskList.map((task, key) => {
        return <Task taskName={task.task} time={task.time} key={key}/>;
      })}
  
    </div>
  );
}
