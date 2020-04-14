import React from "react";
import Star from "./Star";
import { uuid } from "uuidv4";

export const ShowCourse = ({
  course,
  handleAddToCart,
  handleRemoveFromCart
}) => {
  const displayCourseInfo = course.map(course => (
    <div key={course.courseId}>
      <h1 className="text-center text-2xl font-semibold mb-10">
        more info on the <span className="font-bold">{course.title}</span>{" "}
        course
        <div className="text-center w-2/12 m-auto border-b-2 border-indigo-400 mt-3"></div>
      </h1>
      <div className="md:grid grid-cols-6 gap-4">
        <div className="col-span-2">
          <img src={course.imgUrl} alt={course.title} className="rounded-md" />
          <div className="hidden md:block bg-white rounded-md py-4 px-2">
            <p className="px-2 py-2 text-sm mx-2">
              <span className="font-semibold">Course duration: </span>
              <span>{course.duration}</span>
              <span>{course.durationPeriod}</span>
            </p>
            <div className="flex flex-wrap mt-2 px-3">
              {course.tags
                .split(",")
                .splice(0, 8)
                .map(tag => (
                  <p
                    className="text-xs lg:text-md bg-gray-300 mr-1 mt-1 px-2 rounded-lg font-medium"
                    key={uuid()}
                  >
                    #{tag}
                  </p>
                ))}
            </div>
          </div>
        </div>
        <div className="col-span-4 bg-white rounded-lg pt-4 pb-10 px-4">
          <h1 className="font-semibold mr-30 text-2xl">{course.title}</h1>
          <div className="flex justify-between border-b-2 pb-2">
            <div className="px-1 py-2">
              <p className="text-md font-medium text-gray-600">
                by {course.author}
              </p>
            </div>
            <div>
              <div className="flex py-2">
                <div>
                  {course.providerRatings ? (
                    <Star width="20" height="20" />
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <p className="text-md px-1 font-medium">
                    <span>
                      {course.providerRatings
                        ? course.providerRatings
                        : "No rating available"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 pr-6">{course.shortDescription}</div>
          <div>
            <p className="font-semibold mt-8 bg-gray-300 py-2 px-2 rounded-lg w-4/12">
              Price: $20
            </p>
          </div>
          <div className="font-semibold text-xl mt-8 ">
            <a href={course.url}>go to course website </a>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className="mr-8 bg-green-300 px-4 py-3 outline-none outline mt-4 md:mt-2 rounded-md"
          >
            Add to cart
          </button>
          <button
            type="button"
            onClick={handleRemoveFromCart}
            className="px-4 py-3 bg-red-500 outline-none mt-4 md:mt-2 rounded-md text-white"
          >
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  ));
  return <div>{displayCourseInfo}</div>;
};
