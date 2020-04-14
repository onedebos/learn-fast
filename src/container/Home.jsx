import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { uuid } from "uuidv4";
import { useDispatch, useSelector } from "react-redux";

import FeaturedCourses from "../components/FeaturedCourses";

import {
  fetchCourses,
  coursesSelector
} from "../features/courses/CoursesSlice";

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const dispatch = useDispatch();
  const { courses, featuredCourses } = useSelector(coursesSelector);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const handleChange = e => {
    setSearchTerm(e.target.value);
    if (!searchTerm) {
      setFilteredCourses([]);
    }
    const filtered = courses.filter(course =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  const displayFilteredCourses = filteredCourses.map(course => (
    <div key={uuid()}>
      <Link to={`course/${course.courseId}`}>
        <div className="text-sm rounded-lg hover:bg-gray-200 md:flex justify-between w-4/5 lg:w-6/12 px-4 bg-white py-2 border-2 border-light-color mt-1 m-auto">
          <div>{course.title}</div>
          <div className="font-semibold">more details</div>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className="min-h-screen bg-light-color pb-4">
      <div className="text-center">
        <input
          type="text"
          placeholder="search through course catalogue..."
          className="px-4 w-4/5 lg:w-6/12 mt-20 py-4 rounded-lg shadow-md border-2 border-light-color outline-none focus:shadow-outline focus:border-dark-color"
          onChange={handleChange}
          value={searchTerm}
        />
      </div>
      {displayFilteredCourses.length < 10 ? displayFilteredCourses : ""}
      <div className="max-w-sm md:max-w-2xl lg:max-w-full m-auto mt-20">
        <h1 className="text-center text-3xl font-semibold mb-10 ">
          Featured courses
          <div className="text-center w-2/12 lg:w-1/12 m-auto border-b-2 border-indigo-400"></div>
        </h1>

        <FeaturedCourses featuredCourses={featuredCourses} />
      </div>
    </div>
  );
};
