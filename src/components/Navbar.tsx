import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import Container from "./Container";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const navLinks = [
  { id: 1, name: "Register", path: "#" },
  { id: 2, name: "Login", path: "#" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full  h-[100px] fixed z-40 ">
      <Container>
        <div className="-mt-20 ]">
          <div className="mt-5 pt-3 flex justify-between items-center">
            {/* left side */}
            <div className="">
              <img
                src={assets.logo}
                alt="Logo"
                className="w-[134px] h-[32px]"
              />
            </div>
            {/* right side */}
            <div
              onClick={() => setOpen((prev) => !prev)}
              className="lg:hidden z-20 absolute right-2 "
            >
              {open ? (
                <span className="">
                  <IoClose size={30} />
                </span>
              ) : (
                <span className="">
                  <GiHamburgerMenu size={30} />
                </span>
              )}
            </div>
            <div className="">
              <nav
                className={`w-[70%] lg:flex lg:gap-3 lg:w-auto h-screen lg:h-auto absolute lg:static top-0  bg-secondary lg:bg-transparent  transition-all duration-300 ease-in ${
                  open ? "right-0" : "right-[-100%]"
                }`}
              >
                {/* mobile */}
                <ul
                  onClick={() => setOpen((prev) => !prev)}
                  className="lg:hidden mt-10 text-end pr-10"
                >
                  {open &&
                    navLinks.map((link) => (
                      <li key={link.id} className="py-3">
                        <NavLink
                          to={link.path}
                          className={"text-xl text-primary"}
                        >
                          {link.name}
                        </NavLink>
                      </li>
                    ))}
                </ul>
                {/* desktop */}
                <ul className="hidden lg:flex justify-center items-center gap-3">
                  {navLinks.map((link) => (
                    <li key={link.id} className="">
                      <NavLink
                        to={link.path}
                        className="text-primary  font-normal text-[18px] leading-[27px]"
                      >
                        {link.name} |
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <button className="hidden lg:block text-white w-[151px] h-[51px] px-4 py-1 font-normal bg-primary rounded-[10px] ">
                  Get a Job
                </button>
              </nav>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
