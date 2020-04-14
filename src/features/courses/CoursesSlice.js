import { createSlice } from "@reduxjs/toolkit";

const url =
  "https://quze-intern-test.s3.us-east-2.amazonaws.com/course-data.json";

export const initialState = {
  courses: [],
  featuredCourses: [],
  loading: false,
  course: [],
  cart: [],
  totalPriceOfCart: 0,
  totalItemsInCart: 0
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    getCoursesSuccess: (state, { payload }) => {
      state.courses = payload;
    },
    getCoursesFailure: state => {
      state.loading = false;
    },
    getFeaturedCourses: state => {
      state.featuredCourses = state.courses.slice(0, 6);
    },
    addToCart: (state, { payload }) => {
      const val = payload;
      const t = state.cart;
      const indexInCart = t.findIndex(x => x.course.courseId === val.courseId);

      if (indexInCart < 0) {
        const courseObj = { course: payload, amount: 1, total: 20 };
        state.totalPriceOfCart = state.totalPriceOfCart + courseObj.total;
        state.totalItemsInCart += 1;
        state.cart.push(courseObj);
      } else {
        const courseInCart = state.cart[indexInCart];
        courseInCart.amount = courseInCart.amount + 1;
        courseInCart.total = 20 * courseInCart.amount;
        state.totalPriceOfCart = state.totalPriceOfCart + 20;
        state.totalItemsInCart += 1;
      }
    },
    removeFromCart: (state, { payload }) => {
      const val = payload;

      const cart = state.cart;
      const indexInCart = cart.findIndex(
        item => item.course.courseId === val.courseId
      );

      if (indexInCart > -1) {
        const itemToRemove = state.cart[indexInCart];

        if (itemToRemove.amount > 1) {
          itemToRemove.amount -= 1;
          itemToRemove.total -= 20;
          state.totalPriceOfCart -= 20;
          state.totalItemsInCart -= 1;
        } else {
          state.cart = state.cart.filter(
            item => item.course.courseId !== itemToRemove.course.courseId
          );
          state.totalPriceOfCart -= 20;
          state.totalItemsInCart -= 1;
        }
      }
    },
    getCourse: (state, { payload }) => {
      const val = payload.courseId;
      state.course = state.courses.filter(course => course.courseId === val);
    }
  }
});

export const {
  getCoursesSuccess,
  getCoursesFailure,
  getFeaturedCourses,
  addToCart,
  removeFromCart,
  getCourse
} = coursesSlice.actions;

export default coursesSlice.reducer;

export const coursesSelector = state => state.courses;

export function fetchCourses() {
  return async dispatch => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(getCoursesSuccess(data));
      dispatch(getFeaturedCourses());
    } catch (error) {
      dispatch(getCoursesFailure(true));
    }
  };
}
