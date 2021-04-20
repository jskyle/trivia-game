import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./quiz/reducers";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});
