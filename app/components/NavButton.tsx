import React, { FC, ReactNode } from "react";
import Plus from "../svg/Plus";

export interface NavButtonProps {
  children: ReactNode;
}

const NavButton: FC<NavButtonProps> = ({ children }) => {
  return (
    <button className="bg-transparent flex gap-2 items-center justify-between w-full py-2 px-4">
      {children}
      <Plus />
    </button>
  );
};

export default NavButton;
