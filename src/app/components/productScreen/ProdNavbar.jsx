"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const ProdNavbar = ({ prodNavBarList, selectedProduct, onSelect }) => {
  return (
    <div className="flex justify-center items-center">
      <SlideTabs 
        prodNavBarList={prodNavBarList}
        selectedProduct={selectedProduct}
        onSelect={onSelect}
      />
    </div>
  );
};

const SlideTabs = ({ prodNavBarList, selectedProduct, onSelect }) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative z-2 flex w-fit max-w-full rounded-md border border-zinc-300 bg-white p-2 overflow-x-auto space-x-2"
    >
      {prodNavBarList.map((tab) => (
        <Tab 
          key={tab.id}
          setPosition={setPosition}
          isSelected={selectedProduct === tab.prodName}
          onClick={() => onSelect(tab.prodName)}
        >
          {tab.name}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, isSelected, onClick }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();
        const left = ref.current.offsetLeft;

        setPosition({
          left: left - 7,
          width: width,
          opacity: 1,
        });
      }}
      className={`
        relative z-10 block cursor-pointer px-4 py-2 text-sm uppercase md:px-6 md:py-4 md:text-lg
        ${isSelected ? 'text-[#00A8CF]' : 'text-black'}
        whitespace-nowrap
         after:content-[''] after:rounded-full after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[3px] md:after:h-[6px] after:bg-[#00A8CF]
        after:opacity-0 after:transition-opacity after:duration-300
        ${isSelected ? 'after:opacity-100' : ''}
      `}
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-[3px] bottom-0  rounded-md bg-[#00A8CF] text-white md:h-[6px]"
    />
  );
};
