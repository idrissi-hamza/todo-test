'use client';

import React, { useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import Button from './Button';
import { categories } from '../lib/data';

const CategoriesMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>

      <Button label='Category' Icon={AiOutlineMenu} small outline onClick={toggleOpen} />
      <div className="relative ">
        {isOpen ? (
          <div className="absolute rounded-xl shadow-md bg-white overflow-hidden right-0 top-12 text-sm "> 

            <div
              className="flex flex-col cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {categories.map(c => <div key={c.value} onClick={() => { }} className=" flex items-center justify-start gap-2 px-4 py-3 hover:bg-neutral-100 transition font-semibold">
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
