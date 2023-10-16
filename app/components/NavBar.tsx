import React from "react";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-3 py-6">
      <h1 className="font-bold text-xl">Scribble Sync</h1>
      <div className="flex items-center gap-8">
        <button className="rounded-md bg-indigo-600 text-white px-4 py-2 text-sm font-semibold hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Create
        </button>
        <button className="rounded-md bg-transparent text-gray-600 border-2 px-4 py-2 text-sm font-semibold hover:bg-gray-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
          Edit Tags
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
