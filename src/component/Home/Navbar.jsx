import React from "react";
import logo from "../../assets/Logo.png";
import cart from "../../assets/cart.png";
import heart from "../../assets/heart.png";
import search from "../../assets/search.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg py-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="ml-4" />
          <ol className="flex gap-5 ml-9 text-[#df9449] font-playfair list-none">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/product" className="hover:underline">
                Product
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ol>
        </div>
        <div className="flex items-center gap-4">
          <img src={search} alt="Search" className="cursor-pointer" />
          <img src={heart} alt="Favorites" className="cursor-pointer" />
          <img src={cart} alt="Cart" className="cursor-pointer" />
          <button className="bg-[#C0772C] rounded-lg p-2 w-[90px] text-center text-white ml-5">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
