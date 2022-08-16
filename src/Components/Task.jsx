import React from 'react';
import DeleteIcon from '../assets/trash3.svg';
import EditIcon from '../assets/pencil.svg';

const Task = ({ name, id, done, onToggle, onDelete, onEdit, index }) => {
  return (
    <div
      className='task-item'
      key={index}
      onClick={() => onToggle(id)}
      style={{ textDecoration: done ? 'line-through' : 'none', cursor: 'pointer' }}
    >
      <p title={done === false ? 'click to mark task done' : 'click to mark task undone'} className='task-name'>
        {name}
      </p>
      <img className='task-edit' onClick={(e) => onEdit(id, e)} src={EditIcon} alt='edit logo' />
      <img className='task-delete' onClick={(e) => onDelete(id, e)} src={DeleteIcon} alt='delete logo' />
    </div>
  );
};

export { Task };
