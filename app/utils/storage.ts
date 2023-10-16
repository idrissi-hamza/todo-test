import { Task } from '../lib/types';

export const generateUniqueId = () => {
  const timestamp = new Date().getTime().toString(16);
  return timestamp;
};

export const getTasksFromLocalStorage = () => {
  const tasksString = localStorage.getItem('tasks');
  return tasksString ? JSON.parse(tasksString) : [];
};

export const setTasksToLocalStorage = (tasks: Task[]) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
