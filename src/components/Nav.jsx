import { useState } from "react";

export default function Nav() {
  const [navMenu, setnavMenu] = useState(false);
  return (
    <div>
      <div className="flex justify-between md:justify-start md:gap-8 items-center">
        <h1 className="font-bold lg:text-3xl text-2xl">Shortly</h1>
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setnavMenu(!navMenu)}
            aria-label="menu"
            className="lg:text-3xl text-2xl text-gray-600"
          >
            &#9776;
          </button>
        </div>
        <div className="hidden md:flex md:justify-between items-center w-full text-xl text-gray-600">
          <ul className="flex gap-8 items-center">
            <li>
              <a href="#" className="hover:text-black">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Resources
              </a>
            </li>
          </ul>
          <ul className="flex gap-8 items-center">
            <li>
              <a href="#" className="hover:text-black">
                Login
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white px-3 py-2 rounded-3xl  bg-[#2acfcf]"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
      {navMenu && (
        <ul className=" z-10 bg-[#3b3054] text-white px-8 py-8 space-y-5 text-center rounded-2xl mt-3 font-semibold">
          <li>
            <a href="#" className="font-semibold text-xl">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold text-xl">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold text-xl">
              Resources
            </a>
          </li>
          <hr />
          <li>
            <a href="#" className="font-semibold text-xl">
              Login
            </a>
          </li>
          <li className="w-full bg-[#2acfcf] py-3 rounded-4xl">
            <a href="#" className="font-semibold text-xl bg-[#2acfcf] ">
              Sign Up
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}
