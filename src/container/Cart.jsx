import React from "react";
import { coursesSelector } from "../features/courses/CoursesSlice";
import { useSelector } from "react-redux";

export const Cart = () => {
  const { totalItemsInCart, totalPriceOfCart } = useSelector(coursesSelector);

  return (
    <div>
      <div className="text-white flex justify-around">
        <div className="md:mr-2">
          <svg
            height="22pt"
            viewBox="0 -31 512.00033 512"
            width="22pt"
            xmlns="http://www.w3.org/2000/svg"
            fill="#9bb5f2"
          >
            <path d="m166 300.003906h271.003906c6.710938 0 12.597656-4.4375 14.414063-10.882812l60.003906-210.003906c1.289063-4.527344.40625-9.390626-2.433594-13.152344-2.84375-3.75-7.265625-5.964844-11.984375-5.964844h-365.632812l-10.722656-48.25c-1.523438-6.871094-7.617188-11.75-14.648438-11.75h-91c-8.289062 0-15 6.710938-15 15 0 8.292969 6.710938 15 15 15h78.960938l54.167968 243.75c-15.9375 6.929688-27.128906 22.792969-27.128906 41.253906 0 24.8125 20.1875 45 45 45h271.003906c8.292969 0 15-6.707031 15-15 0-8.289062-6.707031-15-15-15h-271.003906c-8.261719 0-15-6.722656-15-15s6.738281-15 15-15zm0 0" />
            <path d="m151 405.003906c0 24.816406 20.1875 45 45.003906 45 24.8125 0 45-20.183594 45-45 0-24.8125-20.1875-45-45-45-24.816406 0-45.003906 20.1875-45.003906 45zm0 0" />
            <path d="m362.003906 405.003906c0 24.816406 20.1875 45 45 45 24.816406 0 45-20.183594 45-45 0-24.8125-20.183594-45-45-45-24.8125 0-45 20.1875-45 45zm0 0" />
          </svg>
        </div>
        <div>
          <span className="ml-1 mr-4">{totalItemsInCart} items</span>$
          {totalPriceOfCart}
        </div>
      </div>
    </div>
  );
};
