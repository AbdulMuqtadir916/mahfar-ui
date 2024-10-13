"use client"
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const ProductSlideTabs = ({ metalShinglesNavBarList, selectedMetalShinglesProduct, onSelect }) => {
  return (
    <div className="">
      <SlideTabs 
        metalShinglesNavBarList={metalShinglesNavBarList}
        selectedMetalShinglesProduct={selectedMetalShinglesProduct}
        onSelect={onSelect}
      />
    </div>
  );
};

const SlideTabs = ({ metalShinglesNavBarList, selectedMetalShinglesProduct, onSelect }) => {
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
      className="relative z-2 flex w-fit max-w-full rounded-full border border-zinc-300 bg-white p-1 overflow-x-auto"
    >
      {metalShinglesNavBarList.map((tab) => (
        <Tab 
          key={tab.id}
          setPosition={setPosition}
          isSelected={selectedMetalShinglesProduct === tab.pathUrl}
          onClick={() => onSelect(tab.pathUrl)}
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
      className={`relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase md:px-5 md:py-3 md:text-base ${
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
      className="absolute z-0 h-7 rounded-full bg-[#00A8CF] text-white md:h-12"
    />
  );
};
