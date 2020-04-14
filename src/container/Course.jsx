import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { coursesSelector } from "../features/courses/CoursesSlice";
import { ShowCourse } from "../components/ShowCourse";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../features/courses/CoursesSlice";

export const Course = ({ match }) => {
  const dispatch = useDispatch();
  const { courses } = useSelector(coursesSelector);
  const incomingCourseId = parseInt(match.params.course_id);

  const courseInfo = courses.filter(
    course => course.courseId === incomingCourseId
  );

  const handleAddToCart = () => {
    dispatch(addToCart(courseInfo[0]));
  };
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(courseInfo[0]));
  };
  return (
    <div className="min-h-screen bg-light-color">
      <div className="max-w-xs sm:max-w-sm lg:max-w-4xl md:max-w-2xl m-auto pt-10 md:pt-20">
        <ShowCourse
          course={courseInfo}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      </div>
      <div className="text-center mt-8 font-semibold text-xl">
        <Link to="/" className="border-b-2 border-black text-indigo-600">
          back to home
        </Link>
      </div>
    </div>
  );
};
