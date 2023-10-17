'use client';

import React, { useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import Button from './Button';
import { categories } from '../lib/data';


// [
//   {
//     label: 'Work',
//     value: 'work',
//     icon: MdWorkOutline,
//   },
//   {
//     label: 'Personal',
//     value: 'personal',
//     icon: MdPersonOutline,
//   },
//   {
//     label: 'Shopping',
//     value: 'shopping',
//     icon: MdOutlineShoppingCart,
//   },
// ];

interface CategoryFilterProps {
  onCategoryChange: (category: string) => void;
  selectedCategory: string
}

const CategoriesMenu = ({ onCategoryChange, selectedCategory }: CategoryFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const getSelectedCategoryIcon = (selectedCategory: string) => {
    const selectedCategoryObj = categories.find((category) => category.value === selectedCategory);
    return selectedCategoryObj ? selectedCategoryObj.icon : AiOutlineMenu;
  };

  return (
    <>
      <Button label='Category' Icon={getSelectedCategoryIcon(selectedCategory)} small outline onClick={toggleOpen} />
      <div className="relative ">
        {isOpen ? (
          <div className="absolute rounded-xl shadow-md bg-white overflow-hidden right-0 top-12 text-sm ">

            <div
              className="flex flex-col cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {categories.map(c => <div key={c.value} onClick={() => onCategoryChange(c.value)} className=" flex items-center justify-start gap-2 px-4 py-3 hover:bg-neutral-100 transition font-semibold">
                <c.icon />
                {c.label}
              </div>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </>);
};

export default CategoriesMenu;
