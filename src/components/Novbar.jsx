import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
function Novbar() {
  const { cart, cartReporire } = useSelector((state) => state.cart);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <li className="">
              <Link to="/" className="">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          My Shop
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex font-semibold  ">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li className="">
            <Link to="/about">About</Link>
          </li>
          <li className="">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-5">
        <Link to="/cart" className="indicator btn text-lg mr-5">
          <span className="indicator-item badge badge-info">
            {cartReporire && cartReporire.length}
          </span>
          <MdOutlineShoppingCart />
        </Link>
      </div>
    </div>
  );
}

export default Novbar;
