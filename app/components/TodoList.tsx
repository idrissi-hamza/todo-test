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
import CategoriesMenu from './CategoriesMenu';

const TodoList = () => {
  const { tasks, setTasks } = useTaskStore();
  const [isLoading, setIsLoading] = useState(true);
  const [filteredTasks, setFilteredTasks] = useState([...tasks]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');


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

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);

  };

  useEffect(() => {
    const filtered = tasks.filter((task) =>
      task.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredByCategory = selectedCategory
      ? filtered.filter((task) => task.category === selectedCategory)
      : filtered


    setFilteredTasks(filteredByCategory);
  }, [tasks, searchQuery, selectedCategory]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('');
  };


  return (
    <>
      <div className='flex items-center justify-between  pt-6 pb-4 pl-10'>
        <div>
          <h1 className="text-2xl font-bold ">Welcome back</h1>
          {tasks.length === 0 && !isLoading ? <p className='text-lgd font-semibold text-slate-600 pl-1 mt-2'>Add a new task</p> : null}
        </div>
        {!isLoading ? <AddTaskButton /> : null}
      </div>
      <div className='mb-4 px-10 flex justify-start gap-2'>
        {!isLoading && tasks.length ? <>
          <SearchTask value={searchQuery} onChange={handleSearchChange} />
          <CategoriesMenu onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} />
        </> : null}
        {searchQuery || selectedCategory ?
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
