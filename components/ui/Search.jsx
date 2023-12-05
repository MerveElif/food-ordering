import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "./Title";
import Image from "next/image";
import { GiCancel } from "react-icons/gi";

const Search = ({ setIsSearchModal }) => {
  return (
    <div className="fixed w-screen h-screen  z-50 top-0 left-0 after:content-[''] after:bg-white after:w-screen after:h-screen after:absolute after:top-0 after:left-0 grid place-content-center after:opacity-60">
      <OutsideClickHandler
        onOutsideClick={() => {
          setIsSearchModal(false);
        }}
      >
        <div className="w-full h-full grid place-content-center">
          <div className="relative z-50 md:w-[37.5rem] w-[23.125rem] bg-white border-2 p-10 rounded-3xl">
            <Title addClass="text-[2.5rem] text-center">Search</Title>
            <input
              type="text"
              placeholder="Search..."
              className="w-full border my-10"
            />
            <div>
              <ul className="mt-10">
                <li className="flex items-center justify-between  hover:bg-primary p-2 transition-all">
                  <div className="relative flex">
                    <Image src="/images/f1.png" width={48} height={48} alt="" />
                  </div>
                  <span className="font-bold">Good Pizza</span>
                  <span className="font-bold">10$</span>
                </li>
                <li className="flex items-center justify-between  hover:bg-primary p-2 transition-all">
                  <div className="relative flex">
                    <Image src="/images/f1.png" width={48} height={48} alt="" />
                  </div>
                  <span className="font-bold">Good Pizza</span>
                  <span className="font-bold">10$</span>
                </li>
                <li className="flex items-center justify-between  hover:bg-primary p-2 transition-all">
                  <div className="relative flex">
                    <Image src="/images/f1.png" width={48} height={48} alt="" />
                  </div>
                  <span className="font-bold">Good Pizza</span>
                  <span className="font-bold">10$</span>
                </li>
              </ul>
              <button
                className="absolute top-4 right-4"
                onClick={() => setIsSearchModal(false)}
              >
                <GiCancel
                  className="transition-all hover:text-primary"
                  size={25}
                />
              </button>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
