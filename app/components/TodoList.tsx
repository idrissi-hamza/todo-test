"use client"

import { useEffect } from 'react';
import AddTaskButton from './AddTaskButton';
import TodoItem from './TodoItem';
import { getTasksFromLocalStorage } from '../utils/storage';
import useTaskStore from '../hooks/useTaskStore';

const TodoList = () => {
  const { tasks, setTasks } = useTaskStore();

  useEffect(() => {
    const storedTasks = getTasksFromLocalStorage();
    setTasks(storedTasks);
  }, []);


  return (
    <>
      <div className='flex items-center justify-between mb-6  py-6 pl-10'>
        <h1 className="text-2xl font-bold ">Todo List</h1>
        <AddTaskButton />
      </div>
      <ul className="max-h-[70vh] overflow-y-scroll px-10">
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
