"use client"

import { useEffect, useState } from 'react';
import AddTaskButton from './AddTaskButton';
import TodoItem from './TodoItem';
import { getTasksFromLocalStorage } from '../utils/storage';
import useTaskStore from '../hooks/useTaskStore';
import Skeleton from './Skeleton';
import SearchTask from './SearchTask';
import toast from 'react-hot-toast';
import { MdOutlineClear } from 'react-icons/md';
import Button from './Button';

const TodoList = () => {
  const { tasks, setTasks } = useTaskStore();
  const [isLoading, setIsLoading] = useState(true);
  const [filteredTasks, setFilteredTasks] = useState([...tasks]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const storedTasks = await getTasksFromLocalStorage();
        setTasks(storedTasks);
      } catch (error) {
        toast.error('Error fetching data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  useEffect(() => {
    const filtered = tasks.filter((task) =>
      task.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredTasks(filtered);
  }, [tasks, searchQuery]);

  const handleReset = () => {
    setSearchQuery('');
  };


  return (
    <>
      <div className='flex items-center justify-between  pt-6 pb-4 pl-10'>
        <h1 className="text-2xl font-bold ">Todo List</h1>
        <AddTaskButton />
      </div>
      <div className='mb-4 px-10 flex justify-start gap-2'>
        <SearchTask value={searchQuery} onChange={handleSearchChange} />
        {searchQuery ?
          <Button
            onClick={handleReset}
            label='Reset'
            Icon={MdOutlineClear}
            small
            ghost
          /> : null}
      </div>
      {isLoading ?
        <Skeleton />
        :
        <ul className="max-h-[70vh] overflow-y-scroll px-10">
          {filteredTasks.map((task) => (
            <TodoItem key={task.id} task={task} />
          ))}
        </ul>}
    </>
  );
};

export default TodoList;
