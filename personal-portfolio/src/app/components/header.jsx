import React from "react";

const Header = () => {
  return (
    <div className="fixed z-50 w-11/12 bg-[#a67cfe] ">
      <div className=" h-10 w-11/12 flex flex-row justify-center items-center space-x-16 bg-[#a67cfe]  ">
      <div className=" flex text-xl text-black hover:text-[#764fa4] font-semibold font-mono h-9 w-20 hover:bg-[#d8b8fb] border-[#a67cfe]  border-2 hover:border-[#764fa4] text-center justify-center items-center rounded-full">Home</div>
      <div className=" flex text-xl text-black hover:text-[#764fa4]  font-semibold font-mono h-9 w-24 hover:bg-[#d8b8fb] border-[#a67cfe]  border-2 hover:border-[#764fa4] text-center justify-center items-center rounded-full">Project</div>
      <div className=" flex text-xl text-black hover:text-[#764fa4]  font-semibold font-mono h-9 w-20 hover:bg-[#d8b8fb] border-[#a67cfe]  border-2 hover:border-[#764fa4] text-center justify-center items-center rounded-full">About</div>
      <div className=" flex text-xl text-black hover:text-[#764fa4]  font-semibold font-mono h-9 w-24 hover:bg-[#d8b8fb] border-[rgb(166,124,254)]  border-2 hover:border-[#764fa4]  text-center justify-center items-center rounded-full">Contact</div>
      
      </div>
    </div>
  );
};

export default Header;
