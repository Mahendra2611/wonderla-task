import React, { useState } from 'react';
import Land from "../assets/landRides.svg";
import Water from "../assets/waterRides.svg";
import Kids from "../assets/kidsRides.svg";

const CategorySidebar = ({active, setActive}) => {
 console.log(active)
 console.log(setActive)

   const categories = [
    { name: 'land', icon: Land, rides: 12, top: '7%', left: '67%' },
    { name: 'water', icon: Water, rides: 8, top: '35%', left: '78%' },
    { name: 'kids', icon: Kids, rides: 6, top: '64%', left: '66%' },
  ];

  return (
    <div className="absolute -translate-x-80 top-32 h-[100vh] ">
      {/* Outer Circle */}
      <div
        className="relative w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, rgb(232, 233, 241) 15deg, rgb(250, 213, 0) 65deg, rgb(250, 213, 0) 115deg, rgb(232, 233, 241) 165deg, rgb(232, 233, 241))",
        }}
      >
        {/* Inner Circle */}
        <div className="absolute inset-24 rounded-full bg-[#0e1e40]" />

        {/* Category Icons */}
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="absolute"
            style={{ top: cat.top, left: cat.left }}
            onClick={() => setActive(cat.name)}
          >
            <div className='flex items-center gap-x-5'> 
                <div
              className={`flex items-center justify-center w-[150px] h-[150px] rounded-full transition-transform duration-300 cursor-pointer ${
                active === cat.name
                  ? 'bg-white border-[18px] border-yellow-400'
                  : ''
              } `}
            >
              <img src={cat.icon} alt={cat.name} className={`${active === cat.name?'w-[70px] h-[70px] ' : 'w-[50px] h-[50px]'} `} />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-lg font-semibold">{cat.name}</span>
              <div className="bg-blue-300 rounded-4xl w-[80px] text-center px-3 py-1 mt-1  text-sm font-medium text-gray-700">
                {cat.rides} Rides
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySidebar;
