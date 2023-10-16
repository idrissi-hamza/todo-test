"use client"

import { tasks } from '../lib/data';
import AddTaskButton from './AddTaskButton';
import TodoItem from './TodoItem';

const TodoList = () => {

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
