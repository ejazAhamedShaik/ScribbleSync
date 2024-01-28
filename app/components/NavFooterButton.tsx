import React from "react";
import Hamburger from "../svg/Hamburger";
import NavButton from "./NavButton";
import Plus from "../svg/Plus";
import ChevronRight from "../svg/ChevronRight";

const NavFooterButton = () => {
  return (
    <div className="flex items-center w-full gap-2 py-2 px-4">
      <Hamburger />
      <button className="bg-transparent flex gap-2 items-center justify-between w-full">
        Notes App
        <ChevronRight />
      </button>
    </div>
  );
};

export default NavFooterButton;
