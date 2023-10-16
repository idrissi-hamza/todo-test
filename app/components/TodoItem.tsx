import useTaskStore from "../hooks/useTaskStore";
import { Task } from "../lib/types"
import { setTasksToLocalStorage } from "../utils/storage";

const TodoItem = ({ task }: { task: Task }) => {

  const { tasks, setTasks } = useTaskStore();

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
    </li>
  )
}

export default TodoItem