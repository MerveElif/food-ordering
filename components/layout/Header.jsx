import { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import Search from "../ui/Search";
import { GiCancel } from "react-icons/gi";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);

  return (
    <div className="h-[5.5rem] bg-secondary">
      <div className="container text-white mx-auto flex justify-between items-center h-full">
          <Logo />
        <nav className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-full sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden ${
            isMenuModal === true && "!grid place-content-center"
          }`}>
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
            <li className="px-[0.313rem] py-[0.625rem] uppercase hover:text-primary cursor-pointer">
              <a href="Home">Home</a>
            </li>
            <li className="px-[0.313rem] py-[0.625rem] uppercase hover:text-primary cursor-pointer">
              <a href="Menu">Menu</a>
            </li>
            <li className="px-[0.313rem] py-[0.625rem] uppercase hover:text-primary cursor-pointer">
              <a href="About">About</a>
            </li>
            <li className="px-[0.313rem] py-[0.625rem] uppercase hover:text-primary cursor-pointer">
              <a href="Book Table">Book Table</a>
            </li>
          </ul>
          {isMenuModal && (
                <button
                className="absolute top-4 right-4"
                onClick={() => setIsMenuModal(false)}
              >
                <GiCancel
                  className="transition-all hover:text-primary"
                  size={25}
                />
              </button>
          )}
        </nav>
        <div className="flex gap-x-4 items-center">
          <a className="hover:text-primary transition-all">
            <FaUserAlt />
          </a>
          <a className="hover:text-primary transition-all">
            <FaShoppingCart />
          </a>
          <button
            className="hover:text-primary transition-all"
            onClick={() => setIsSearchModal(true)}
          >
            <FaSearch />
          </button>
          <a href="" className="md:inline-block hidden">
            <button className="btn-primary">Order Online</button>
          </a>
          <button className="sm:hidden inline-block" onClick={()=> setIsMenuModal(true)}>
          <RxHamburgerMenu className="text-xl hover:text-primary transition-all"/>
          </button>
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;
