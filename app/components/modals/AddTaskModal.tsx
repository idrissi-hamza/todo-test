'use client';

import React, { useState } from 'react';

import Modal from './Modal';
import useAddTaskModal from '@/app/hooks/useAddTask';


const AddTaskModal = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { isOpen, onClose } = useAddTaskModal();
  

  const bodyContent = (
    <div >
      add task modal
    </div >
  );


  return (
    <Modal
      disabled={isLoading}
      isOpen={isOpen}
      title="New Task"
      actionLabel="Add"
      onClose={onClose}
      onSubmit={() => { }}
      body={bodyContent}
    />
  );
};

export default AddTaskModal;
