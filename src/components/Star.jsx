import React from "react";

const Star = ({ width, height }) => {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path
            d="M0.557367 7.511L7.01312 6.52488L9.90674 0.361377C10.1229 -0.098873 10.878 -0.098873 11.0941 0.361377L13.9869 6.52488L20.4426 7.511C20.9729 7.59238 21.1846 8.23725 20.8127 8.61788L16.1227 13.4251L17.2314 20.2213C17.3197 20.7611 16.7431 21.1663 16.2662 20.9011L10.5 17.7144L4.73374 20.902C4.26124 21.1645 3.67937 20.7673 3.76862 20.2221L4.87724 13.426L0.187244 8.61875C-0.184631 8.23725 0.0279922 7.59238 0.557367 7.511Z"
            fill="#B2F5EA"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect
              width="40"
              height="40"
              transform="matrix(-1 0 0 1 21 0)"
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Star;
