'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const DropdownList = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div
        className="cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="filter-trigger">
          <figure>
            <Image
              src="/assets/icons/hamburger.svg"
              alt="hamburger-menu"
              width={14}
              height={14}
            />
            Most recent
          </figure>
          <Image
            src="/assets/icons/arrow-down.svg"
            alt="arrow-down"
            width={14}
            height={14}
          />
        </div>
      </div>
      {isOpen && (
        <ul className="dropdown">
          {['Most recent', 'Most popular', 'Most viewed'].map((item) => (
            <li
              key={item}
              className="list-item"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownList;
