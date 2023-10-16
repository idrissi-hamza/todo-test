// mockedData.ts
import { Task } from './types';
import {
  MdWorkOutline,
  MdPersonOutline,
  MdOutlineShoppingCart,
} from 'react-icons/md';

const tasks: Task[] = [
  {
    id: '1',
    text: 'task1',
    isCompleted: false,
    category: 'shopping',
  },
  {
    id: '2',
    text: 'task2',
    isCompleted: true,
    category: 'work',
  },
  {
    id: '3',
    text: 'task3',
    isCompleted: false,
    category: 'personal',
  },
  {
    id: ' 4',
    text: 'task4',
    isCompleted: false,
    category: 'personal',
  },
  {
    id: '5',
    text: 'task5',
    isCompleted: false,
    category: 'personal',
  },
];

const categories = [
  {
    label: 'Work',
    value: 'work',
    icon: MdWorkOutline,
  },
  {
    label: 'Personal',
    value: 'personal',
    icon: MdPersonOutline,
  },
  {
    label: 'Shopping',
    value: 'shopping',
    icon: MdOutlineShoppingCart,
  },
];

export { tasks, categories };
