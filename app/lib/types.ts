
export enum Category {
  Work = 'Work',
  Personal = 'Personal',
  Shopping = 'Shopping',
}


export type Task = {
  id: string;
  text: string;
  isCompleted: boolean;
  category: Category;
};
