import React from "react";
import Nav from "./admin/Nav";

const Sidebar = () => {
  return (
    <div className="h-screen shadow-lg md:max-w-1/3 md:w-1/3 w-full">
      <Nav />
    </div>
  );
};

export default Sidebar;
