import React, { useContext } from 'react';
import DeleteIcon from '../assets/trash3.svg';
import EditIcon from '../assets/pencil.svg';
import { TaskContext } from '../Contexts/TaskContext';

const Task = ({ name, id, done }) => {
  const { toggleDone, deleteTask, editTask } = useContext(TaskContext);

  return (
    <div
      className='task-item'
      key={id}
      onClick={() => toggleDone(id)}
      style={{ textDecoration: done ? 'line-through' : 'none', cursor: 'pointer' }}
    >
      <p title={done === false ? 'click to mark task done' : 'click to mark task undone'} className='task-name'>
        {name}
      </p>
      <img className='task-edit' onClick={(e) => editTask(id, e)} src={EditIcon} alt='edit logo' />
      <img className='task-delete' onClick={(e) => deleteTask(id, e)} src={DeleteIcon} alt='delete logo' />
    </div>
  );
};

export { Task };
