"use client";
import React, { useState } from "react";
import NavButton from "./NavButton";
import Avatar from "./Avatar";
import NavFooterButton from "./NavFooterButton";

const NavBar = () => {
  var [state, setState] = useState('')

  console.log(useState)
  return (
    <div className="col-span-2 px-3 py-6 bg-blueNav text-NavTitleColor">
      <div className="flex flex-col min-h-full gap-8">
        <header className="flex h-10">
          <Avatar />
        </header>
        <div className="flex flex-col gap-4 flex-1 items-start">
          <NavButton>Categories</NavButton>
          <NavButton>Tags</NavButton>
          <NavButton>Colors</NavButton>
        </div>
        <footer className="flex h-10">
          <NavFooterButton />
        </footer>
      </div>
    </div>
  );
};

export default NavBar;
