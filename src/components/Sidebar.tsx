import Image from "next/image";
import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="flex flex-col w-64 h-screen py-8 bg-white dark:bg-gray-950 dark:text-white">
      <div className="flex flex-col items-center mt-6 -mx-2">Sidebar</div>
    </div>
  );
};

export default Sidebar;
