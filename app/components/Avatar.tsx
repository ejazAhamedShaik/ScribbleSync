import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <div className="bg-transparent flex gap-2 items-center w-full py-2 px-4">
      {/* <Image
        className="w-10 h-10 rounded-full"
        src="/docs/images/people/profile-picture-5.jpg"
        alt="Rounded avatar"
        width={16}
        height={16}
      /> */}
      <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <svg
          className="absolute w-8 h-8 text-gray-400 -left-1"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      Isabella Ray
    </div>
  );
};

export default Avatar;
