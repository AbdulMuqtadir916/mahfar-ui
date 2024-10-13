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
      className="relative z-2 flex w-fit max-w-full rounded-full border border-zinc-300 bg-white p-2 overflow-x-auto"
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

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className={`relative z-10 block cursor-pointer px-4 py-2 text-sm uppercase md:px-6 md:py-4 md:text-lg ${
        isSelected ? 'text-white bg-[#00A8CF] rounded-full' : 'text-black'
      } whitespace-nowrap`}
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
      className="absolute z-0 h-[36px] rounded-full bg-[#00A8CF] text-white md:h-[60px]"
    />
  );
};
