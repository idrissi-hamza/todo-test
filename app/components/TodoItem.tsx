import { Task } from "../lib/types"

const TodoItem = ({ task }: { task: Task }) => {

  return (
    <li
      className='flex items-center p-3 border-b last:border-none'
    >
      <input
        id={task.id}
        type='checkbox'
        defaultChecked={task.isCompleted}
        className='peer h-4 w-4 cursor-pointer rounded border-gray-300 text-slate-600 focus:ring-slate-600'
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