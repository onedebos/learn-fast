import React from "react";
import { Link } from "react-router-dom";
import { uuid } from "uuidv4";
import Star from "./Star";

const FeaturedCourses = ({ featuredCourses }) => {
  const displayFeaturedCourses = featuredCourses.map(course => (
    <div
      key={uuid()}
      className="bg-white max-w-sm lg:max-w-md rounded-lg shadow-md"
    >
      <Link to={`/course/${course.courseId}`}>
        <img
          src={course.imgUrl}
          alt="course display"
          className="w-full rounded-lg"
        />
        <div className="px-4 py-4">
          <div className="flex justify-between">
            <div className="bg-teal-400 px-2 py-1 rounded-full">
              <p className="text-xs font-medium">{course.provider}</p>
            </div>
            <div>
              <div className="flex">
                <div className="py-1">
                  <Star width="15" height="15" />
                </div>
                <div>
                  <p className="text-xs px-1 py-1 font-medium">
                    <span>{course.providerRatings}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-md pt-1 font-medium">{course.title}</p>
          </div>
          <div className="text-sm text-gray-600">{course.author}</div>
          <div className="flex flex-wrap mt-2">
            {course.tags
              .split(",")
              .splice(0, 3)
              .map(tag => (
                <p
                  className="text-sm bg-gray-300 mr-1 mt-1 px-2 rounded-lg"
                  key={uuid()}
                >
                  #{tag}
                </p>
              ))}
          </div>
        </div>
      </Link>
    </div>
  ));
  return (
    <div className="grid md:grid-cols-2 md:max-w-2xl lg:max-w-full m-auto lg:grid-cols-3 gap-6 lg:gap-10 mt-10 mx-8 lg:ml-32 lg:mr-20">
      {displayFeaturedCourses}
    </div>
  );
};

export default FeaturedCourses;
