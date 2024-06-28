// src/components/Accordion.js
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t-2 border-b-2 border-[#642C0C] w-[650px] mx-auto">
      <button
        className="w-full text-left px-4 py-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <span>{title}</span>
          <span className="w-5 h-5">
            {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </span>
        </div>
      </button>
      {isOpen && <div className="px-4 py-2">{content}</div>}
    </div>
  );
};

const Accordion = () => {
  const items = [
    {
      title: "Item 1",
      content: "Content for item 1.",
    },
    {
      title: "Item 2",
      content: "Content for item 2.",
    },
    {
      title: "Item 3",
      content: "Content for item 3.",
    },
  ];

  return (
    <div className="mx-auto mt-4 bg-[#e9e8e8c2] p-8">
      {items.map((item, index) => (
        <AccordionItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Accordion;
