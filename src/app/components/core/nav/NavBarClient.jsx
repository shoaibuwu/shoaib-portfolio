"use client";
import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Logo from "../../Logo";
import Link from "../../Link";

const NavbarClient = ({ email }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="flex flex-col items-center relative">
        <div className="w-full flex justify-center relative">
          <Logo />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"} // Accessible name for button
            className="absolute right-0 top-1/2 -translate-y-1/2 text-secondary"
          >
            {isOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
          </button>
        </div>

        <Link
          href={`mailto:${email}`}
          className="text-secondary text-xl mt-5 hover:text-blue-950 transition-colors"
        >
          {email}
        </Link>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="mt-4 flex flex-col space-y-4 animate-fadeIn">
          <Link
            href={"/cv"}
            className="bg-primary text-secondary px-4 py-2 rounded-lg transition-colors hover:bg-blue-950 hover:text-primary"
            aria-label="View my CV" // Accessible name for link
          >
            My CV
          </Link>
          <Link
            href={"/"}
            className="bg-primary text-secondary px-4 py-2 rounded-lg transition-colors hover:bg-blue-950 hover:text-primary"
            aria-label="Hire me" // Accessible name for link
          >
            Hire Me!
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavbarClient;
