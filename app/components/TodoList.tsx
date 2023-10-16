"use client"

import { tasks } from '../lib/data';
import TodoItem from './TodoItem';

const TodoList = () => {

  return (
    <>
      <h1 className="text-2xl font-bold mb-6  py-6 px-10">Todo List</h1>
      <ul className="max-h-[70vh] overflow-y-scroll px-10">
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} />
        ))}
      </ul>
    </>


  );
};

export default TodoList;
