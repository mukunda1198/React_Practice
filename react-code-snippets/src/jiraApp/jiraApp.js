import React, { useState } from "react";
import { taskData } from './constant/taskData'
import "./jiraApp.css";

const JiraApp = () => {
  const [toDoTask, setToDoTask] = useState(taskData);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);
  const handleTable = (e) => {
    const taskElement = e?.target.closest(".task");
    const taskId = parseInt(taskElement?.dataset?.taskId);
    const task = taskData.find((task) => task.id === taskId);
    console.log("taskElement==?",task);
    if (task?.status === "todo") {
        const filteredToDoTask = toDoTask.filter((t) => t.id !== taskId);
        setToDoTask(filteredToDoTask);
      task.status = "progress";
      setInProgress((prev) => [...prev, task]);
    }
    else if( task?.status === "progress") {
        console.log("=progress==?")
        const filteredProgressTask = inProgress.filter((t) => t.id !== taskId);
     setInProgress(filteredProgressTask);
      task.status = "done";
      setDone((prev) => [...prev, task]);
    }

  };
  const handleToDoTask = (selectedTask) => {
    // console.log("Selected Task:", selectedTask);
    // // Remove the selected task from the current column
    // const filterToDoTask = toDoTask.filter(
    //   (task) => task.id !== selectedTask.id
    // );
    // setToDoTask(filterToDoTask);
    // setInProgress([...inProgress, selectedTask]);
  };
  const handleInProgressTask = (selectedTask) => {
    // console.log("Selected Task:", selectedTask);
    // // Remove the selected task from the current column
    // const filterToDoTask = inProgress.filter(
    //   (task) => task.id !== selectedTask.id
    // );
    // setInProgress(filterToDoTask);
    // setDone([...done, selectedTask]);
  };
  return (
    <div className="task-table">
      <div className="table-header">
        <div className="header-cell">To Do</div>
        <div className="header-cell">In Progress</div>
        <div className="header-cell">Done</div>
      </div>
      <div className="table-row" onClick={(e) => handleTable(e)}>
        <div className="column">
          {toDoTask.map((task) => (
            <div
              key={task.id}
              className="task"
              onClick={() => handleToDoTask(task)}
              data-task-id={task.id}
            >
              {task.task}
            </div>
          ))}
        </div>
        <div className="column">
          {inProgress.map((task) => (
            <div
              key={task.id}
              className="task"
              onClick={() => handleInProgressTask(task)}
              data-task-id={task.id}
            >
              {task.task}
            </div>
          ))}
        </div>
        <div className="column">
          {done.map((task) => (
            <div key={task.id} className="task" data-task-id={task.id}>
              {task.task}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JiraApp;
