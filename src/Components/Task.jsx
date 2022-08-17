import React, { useContext } from 'react';
import DeleteIcon from '../assets/trash3.svg';
import EditIcon from '../assets/pencil.svg';
import { TaskContext } from '../Contexts/TaskContext';
import styles from './Task.module.scss';
import classNames from 'classnames';

const Task = ({ name, id, done }) => {
  const { toggleDone, deleteTask, editTask } = useContext(TaskContext);

  return (
    <div className={classNames(styles['task-item'], { [styles['done']]: done })} key={id} onClick={() => toggleDone(id)}>
      <p
        title={done === false ? 'click to mark task done' : 'click to mark task undone'}
        className={classNames(styles['task-name'], { [styles['done']]: done })}
      >
        {name}
      </p>
      <img className={styles['task-edit']} onClick={(e) => editTask(id, e)} src={EditIcon} alt='edit logo' />
      <img className={styles['task-delete']} onClick={(e) => deleteTask(id, e)} src={DeleteIcon} alt='delete logo' />
    </div>
  );
};

export { Task };
