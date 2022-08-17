import { useState } from 'react';
import './App.css';
import { Tasks } from './Components/Tasks';
import { TaskContext } from './Contexts/TaskContext';

function App() {
  const [taskName, setTaskName] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [editing, setEditing] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (taskName.length === 0) {
      return;
    }

    if (!editing) {
      setTaskList([
        ...taskList,
        {
          name: taskName,
          id: new Date().getTime(),
          done: false,
        },
      ]);
      setTaskName('');
    }

    if (editing) {
      const updatedTaskList = taskList.map((task) => {
        let singleTask = { ...task };

        if (singleTask.id === editing) {
          singleTask.name = taskName;
        }

        return singleTask;
      });

      setTaskList([...updatedTaskList]);
      setEditing(null);
      setTaskName('');
    }
  };

  const toggleDone = (id) => {
    setTaskList(taskList.map((task) => (task.id === id ? { ...task, done: !task.done } : task)));
  };

  const deleteTask = (id, e) => {
    e.stopPropagation();
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const editTask = (id, e) => {
    e.stopPropagation();
    setEditing(id);

    taskList.map((task) => {
      let singleTask = { ...task };

      if (singleTask.id === id) {
        setTaskName(singleTask.name);
      }

      return singleTask;
    });
  };

  return (
    <TaskContext.Provider
      value={{
        toggleDone,
        deleteTask,
        editTask,
        taskName,
        setTaskName,
        taskList,
        setTaskList,
        editing,
        setEditing,
      }}
    >
      <div className='App'>
        <h1>todo list</h1>

        <form onSubmit={handleFormSubmit}>
          <input type='text' value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder='Enter task name' />
          <button type='submit'>{editing ? 'Update task' : 'Add task'}</button>
        </form>
        <Tasks />

        {/* {taskList.map(({ name, id, done }, index) => (
          <Task name={name} id={id} done={done} onDelete={deleteTask} onEdit={editTask} onToggle={toggleDone} key={index} />
        ))} */}
      </div>
    </TaskContext.Provider>
  );
}

export default App;
// TODO ?  using spread operator when changing values
// https://tutorial.eyehunts.com/js/update-object-in-array-javascript-using-the-spread-operator-example/#:~:text=in%20the%20.map-,let%20array%20%3D%20%5B%7Bid%3A1%2Cname%3A'One,log(array)%3B%20console.

// let taskList = [
//   { id: 1, name: 'task 1' },
//   { id: 2, name: 'task 2' },
//   { id: 3, name: 'task 3' },
// ];

// taskList.map((task) => {
//   let task = { ...task };

//   console.log(task);

//   return task;
// });

// let array2 = taskList.map((task) => {
//   var returnValue = { ...task };

//   console.log(returnValue);

//   if (task.id === 2) {
//     returnValue.name = 'Not Two';
//   }

//   return returnValue;
// });

// console.log(array);
// console.log(array2);
