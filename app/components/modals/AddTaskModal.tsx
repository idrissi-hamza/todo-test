'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';

import Modal from './Modal';
import useAddTaskModal from '@/app/hooks/useAddTask';
import { categories } from '@/app/lib/data';
import { generateUniqueId, setTasksToLocalStorage } from '@/app/utils/storage';
import useTaskStore from '@/app/hooks/useTaskStore';

const schema = z.object({
  text: z.string().min(1, 'Required').min(3, 'minimum 3 letters'),
  category: z.string().min(1, 'required')
});

export type FormValuesType = z.infer<typeof schema>;

const AddTaskModal = () => {
  const { tasks, setTasks } = useTaskStore();

  const { isOpen, onClose } = useAddTaskModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValuesType>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValuesType> = (data) => {

    const taskObject = {
      id: generateUniqueId(),
      isCompleted: false,
      ...data,
    };

    const newTasks = [...tasks, taskObject]

    setTasks(newTasks)

    setTasksToLocalStorage(newTasks);
    reset()
    onClose()

  };

  const bodyContent = (
    <div className="flex  flex-col gap-4  w-full  ">

      {/* text input */}
      <div className="w-full relative flex flex-col gap-1">
        <label
          className={`font-semibold text-slate-700
          ${errors.text ? 'text-rose-500' : 'text-neutral-800'}
        `}
        >
          What Tasks are you planning?
        </label>
        {errors.text && (
          <span className="text-xs italic text-red-500 ">
            {errors.text?.message}
          </span>
        )}
        <input
          {...register('text')}
          placeholder='Go gym'
          type='text'
          className={` peer w-full p-2 font-light  bg-white  border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed
          ${errors.text ? 'border-rose-500' : 'border-neutral-300'}
          ${errors.text ? 'focus:border-rose-500' : 'focus:border-black'}
          `}
        />
      </div>

      {/* categories radio input */}
      <div className="w-full relative flex flex-col gap-1">
        <span
          className={`font-semibold  text-slate-700 mb-2
          ${errors.category ? 'text-rose-500' : 'text-neutral-800'}
        `}
        >
          Choose a category:
        </span>
        {errors.category && (
          <span className="text-xs italic text-red-500 ">
            Required
          </span>
        )}
        <div className="flex justify-center gap-6 ">
          {categories.map(option => <div key={option.value} className='w-24'>
            <input
              id={option.value}
              className='peer hidden'
              type="radio"
              value={option.value}
              {...register("category")} 
            />
            <label htmlFor={option.value} className={`peer-checked:font-bold peer-checked:border-4  peer-checked:border-slate-700  peer-checked:bg-slate-200 flex flex-col items-center bg-slate-50 p-4 border rounded-md ${errors.category && 'border-red-400'}`}>
              <option.icon />
              {option.label}
            </label>

          </div>)}
        </div>
      </div>
    </div >
  );


  return (
    <Modal
      disabled={false}
      isOpen={isOpen}
      title="New Task"
      actionLabel="Add"
      onClose={() => {
        reset()
        onClose()
      }}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default AddTaskModal;
