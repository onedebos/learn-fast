import React from "react";
import { coursesSelector } from "../features/courses/CoursesSlice";
import { useSelector, useDispatch } from "react-redux";
import { uuid } from "uuidv4";
import { removeFromCart } from "../features/courses/CoursesSlice";
import Star from "../components/Star";
import { Link } from "react-router-dom";

export const CartItems = () => {
  const dispatch = useDispatch();
  const { cart, totalPriceOfCart, totalItemsInCart } = useSelector(
    coursesSelector
  );

  return (
    <div className="min-h-screen bg-light-color pb-4 ">
      <div className="md:max-w-xl lg:max-w-4xl m-auto">
        <h1 className="pt-8 mb-8 text-2xl md:text-4xl font-semibold ml-4 md:ml-0">
          {" "}
          Your cart
        </h1>
      </div>

      {cart.length < 1 ? (
        <div className="md:max-w-xl lg:max-w-4xl m-auto">
          <p className="mx-4 md:mx-0">
            You currently have no items in your cart. See our{" "}
            <Link to="/" className="font-semibold text-light-color underline">
              course list
            </Link>{" "}
            to add courses to your cart.
          </p>
        </div>
      ) : (
        <div className="md:max-w-xl lg:max-w-4xl m-auto">
          {cart.map(item => (
            <div key={uuid()}>
              <div className="bg-white mb-4 px-4 py-4 grid grid-cols-4 rounded-lg mx-4 md:mx-0">
                <div className="col-span-2">
                  <div className="font-semibold">{item.course.title}</div>
                  <div>
                    <div className="text-gray-600 font-medium md:flex">
                      by&nbsp;
                      {item.course.author}
                      <div className="flex md:ml-2">
                        <Star width="18" height="18" />
                        &nbsp;
                        <p className="text-black">
                          {item.course.providerRatings}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p>
                    <span className="font-medium">{item.amount}</span> items
                  </p>
                </div>
                <div className="text-center">
                  <p>${item.total}</p>{" "}
                </div>
                <div className="mt-4">
                  <button
                    className="bg-red-500 text-white font-semibold px-2 py-1 rounded-lg no-outline"
                    onClick={() => dispatch(removeFromCart(item.course))}
                  >
                    remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="md:max-w-xl lg:max-w-4xl m-auto grid grid-cols-4">
            <div className="col-span-2 mx-4 md:mx-0">
              <p className="font-bold text-xl ">Totals</p>{" "}
            </div>
            <div className="text-center">
              <p className="font-semibold">{totalItemsInCart} items</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">${totalPriceOfCart}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
