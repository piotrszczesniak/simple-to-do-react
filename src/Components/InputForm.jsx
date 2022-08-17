import classNames from 'classnames';
import React, { useContext } from 'react';
import { TaskContext } from '../Contexts/TaskContext';
import styles from './InputForm.module.scss';

const InputForm = () => {
  const { handleFormSubmit, taskName, setTaskName, editing } = useContext(TaskContext);

  return (
    <>
      <form className={classNames(styles['input-form'])} onSubmit={handleFormSubmit}>
        <input
          className={classNames(styles['input-input'])}
          type='text'
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder='Enter task name'
        />
        <button className={classNames(styles['input-button'])} type='submit'>
          {editing ? 'Update task' : 'Add task'}
        </button>
      </form>
    </>
  );
};

export { InputForm };
