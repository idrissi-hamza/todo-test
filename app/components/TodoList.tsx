"use client"

import { useEffect, useState } from 'react';
import AddTaskButton from './AddTaskButton';
import TodoItem from './TodoItem';
import { getTasksFromLocalStorage } from '../utils/storage';
import useTaskStore from '../hooks/useTaskStore';
import Skeleton from './Skeleton';

const TodoList = () => {
  const { tasks, setTasks } = useTaskStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const storedTasks = await getTasksFromLocalStorage();
        setTasks(storedTasks);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <div className='flex items-center justify-between mb-6  py-6 pl-10'>
        <h1 className="text-2xl font-bold ">Todo List</h1>
        <AddTaskButton />
      </div>
      {isLoading ?
        <Skeleton />
        :
        <ul className="max-h-[70vh] overflow-y-scroll px-10">
          {tasks.map((task) => (
            <TodoItem key={task.id} task={task} />
          ))}
        </ul>}
    </>
  );
};

export default TodoList;
