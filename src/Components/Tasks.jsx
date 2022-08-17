import React, { useContext } from 'react';
import { TaskContext } from '../Contexts/TaskContext';

import { Task } from './Task';

const Tasks = () => {
  const { taskList } = useContext(TaskContext);

  return (
    <>
      {taskList.map(({ name, id, done }) => (
        <Task name={name} id={id} done={done} key={id} />
      ))}
    </>
  );
};

export { Tasks };
