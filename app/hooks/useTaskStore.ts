import {create} from 'zustand';
import { Task } from '../lib/types';

interface TaskStore {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}

const useTaskStore = create<TaskStore>((set) => {

  return {
    tasks: [],
    setTasks: (tasks) => set({ tasks }),
  };
});

export default useTaskStore;
