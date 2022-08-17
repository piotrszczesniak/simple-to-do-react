import React, { useContext } from 'react';
import { TaskContext } from '../Contexts/TaskContext';

const InputForm = () => {
  const { handleFormSubmit, taskName, setTaskName, editing } = useContext(TaskContext);

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input type='text' value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder='Enter task name' />
        <button type='submit'>{editing ? 'Update task' : 'Add task'}</button>
      </form>
    </>
  );
};

export { InputForm };
