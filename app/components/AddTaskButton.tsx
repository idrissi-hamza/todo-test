'use client'
import React from 'react'
import Button from './Button'
import useAddTaskModal from '../hooks/useAddTask';
import { BiPlus } from 'react-icons/bi';


const AddTaskButton = () => {
  const { onOpen } = useAddTaskModal();

  return (
    <div className=' flex items-end justify-end pr-12'>
      <Button Icon={BiPlus} onClick={onOpen} rounded />
    </div>
  )
}

export default AddTaskButton