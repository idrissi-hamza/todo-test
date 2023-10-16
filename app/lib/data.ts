// mockedData.ts
import { Category, Task } from './types';

const tasks: Task[] = [
  {
    id: '1',
    text: 'task1',
    isCompleted: false,
    category: Category.Shopping,
  },
  {
    id: '2',
    text: 'task2',
    isCompleted: true,
    category: Category.Work,
  },
  {
    id: '3',
    text: 'task3',
    isCompleted: false,
    category: Category.Personal,
  },
  {
    id:' 4',
    text: 'task4',
    isCompleted: false,
    category: Category.Personal,
  },
  {
    id: '5',
    text: 'task5',
    isCompleted: false,
    category: Category.Personal,
  }
];

const categories: Category[] = [
  Category.Work,
  Category.Personal,
  Category.Shopping,
];

export { tasks, categories };
