"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import Avatar from "react-avatar";

function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center bg-gray-500/10 rounded-b-2xl">
        <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-br from-[#c53a94] to-[#30c5d2] rounded filter blur-2xl opacity-70 -z-50" />
        <Image
          src="/plantracker-high-resolution-logo-transparent.png"
          width="200"
          height="70"
          alt="PlANTRACKER"
          className=" w-28 md:w-24 pb-10 md:pb-0 object-contain"
        />
        <div className="flex items-center flex-1 justify-end w-full">
          {/* search box */}
          <form
            action=""
            className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial"
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>
          {/* avatar */}
          <Avatar name="Shivam Singh" round size="50" color="blue" />
        </div>
      </div>
      <div className="flex items-center py-2 justify-center px-5 md:py-5">
        <p className="flex p-5 items-center text-sm font-light pr-5 shadow-xl w-fit bg-white italic max-w-3xl text-[blue] ">
          <UserCircleIcon className="inline-block h-10 w-10 text-[blue] mr-1" />
          GPT is summarizing your data
        </p>
      </div>
    </header>
  );
}

export default Header;
