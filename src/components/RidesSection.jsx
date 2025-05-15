import React, { useState } from "react";
import CategorySidebar from "./CategorySidebar";
import RideCard from "./RideCard";

const RidesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("land");

  return (
    <div className="bg-slate-700 w-full h-full  flex gap-10  ">
    
      <div className="w-1/4 h-full ">
        <CategorySidebar active={selectedCategory} setActive={setSelectedCategory} />
      </div>

     
      <div className="w-3/4 overflow-x-hidden">
        <RideCard category={selectedCategory} />
      </div>
    </div>
  );
};

export default RidesSection;
