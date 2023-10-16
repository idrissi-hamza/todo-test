import { useState } from "react";
import useTaskStore from "../hooks/useTaskStore";
import { Task } from "../lib/types"
import { copyTextToClipboard } from "../utils/copyToClipboard";
import { setTasksToLocalStorage } from "../utils/storage";

import { IoCopyOutline, IoCheckmark } from "react-icons/io5";

const TodoItem = ({ task }: { task: Task }) => {

  const { tasks, setTasks } = useTaskStore();
  const [isCopied, setIsCopied] = useState(false);

  const toggleIsCompleted = (taskId: string) => {
    const updatedTasks = tasks.map((t) => {
      if (t.id === taskId) {
        return { ...t, isCompleted: !t.isCompleted };
      }
      return t;
    });

    setTasks(updatedTasks);
    setTasksToLocalStorage(updatedTasks)
    console.log(taskId)
  };

  const handleCopyClick = () => {
    copyTextToClipboard(task.text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
  }

  return (
    <li
      className='flex items-center p-3 border-b last:border-none'
    >
      <input
        id={task.id}
        type='checkbox'
        defaultChecked={task.isCompleted}
        className='peer h-4 w-4 cursor-pointer rounded border-gray-300 text-slate-600 focus:ring-slate-600'
        onChange={() => toggleIsCompleted(task.id)}
      />
      <label
        htmlFor={task.id}
        className='cursor-pointer peer-checked:text-slate-500 peer-checked:line-through pl-2 font-semibold tracking-wide'
      >
        {task.text}
      </label>
      <span className='ml-auto text-sm text-slate-500 peer-checked:line-through'>
        {task.category}
      </span>

      <button
        className="relative ml-2 flex items-center justify-center h-8 text-xs bg-white border rounded-md cursor-pointer w-9 border-neutral-200/60 hover:bg-neutral-100 active:bg-white focus:bg-white focus:outline-none  hover:text-neutral-600 group"
        onClick={handleCopyClick}
      >
        <span className={`absolute  left-10 z-50  ${isCopied && 'text-green-500 '}`}>{isCopied && "Copied!"}</span>
        <IoCheckmark
          className={`w-4 h-4 ${isCopied ? 'text-green-500' : 'hidden'}`}
        />
        <IoCopyOutline
          className={`w-4 h-4 ${!isCopied ? 'stroke-current' : 'hidden'}`}
        />
      </button>

    </li>
  )
}

export default TodoItem