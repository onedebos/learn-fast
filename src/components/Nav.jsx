import React from "react";
import { Link } from "react-router-dom";
import { Cart } from "../container/Cart";

const Nav = () => {
  return (
    <div>
      <div className="bg-base-color sm:flex flex-auto justify-around items-center py-4 text-center">
        <Link to="/">
          <div className="text-white font-semibold text-3xl md:text-4xl">
            <p>
              Lrn:<span className="text-light-color ">:Fast</span>
            </p>
          </div>
        </Link>
        <div className="md:text-xl flex justify-around max-w-xl">
          <div className="text-white items-end">
            <Link
              to="/cart"
              className="mr-4 lg:mr-8 bg-white py-1 px-2 rounded-lg text-teal-700 font-medium"
            >
              see your cart
            </Link>
          </div>
          <div>
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
