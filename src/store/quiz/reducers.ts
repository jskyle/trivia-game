import { produce } from "immer";

import {
  SET_FETCHED_QUESTIONS,
  SET_QUESTION_RESPONSE,
  SET_QUIZ_HEADER,
  SET_API_TOKEN,
  SET_QUIZ_DETAILS,
  HANDLE_API_ERROR,
  HANDLE_API_FETCHING,
  RESET_QUIZ,
} from "./actions";

const state = {
  questions: [],
  status: "Initial",
  message: "",
  header: "Truthy Falsy Quiz",
  token: "",
  numberOfQuestions: 10,
  difficulty: "hard",
};

export const path = ["uiStore", "smartStackerListView", "filters"];

const reducer = produce<any>((base: any, action: any) => {
  switch (action.type) {
    case SET_FETCHED_QUESTIONS: {
      base.status = "Success";
      base.questions = [...base.questions, ...action.payload];
      break;
    }
    case SET_QUESTION_RESPONSE: {
      base.questions[action.payload.idx] = {
        ...base.questions[action.payload.idx],
        response: action.payload.response,
      };

      break;
    }
    case SET_QUIZ_HEADER: {
      base.header = action.payload;
      break;
    }
    case SET_API_TOKEN: {
      base.status = "Success";
      base.token = action.payload;
      break;
    }
    case SET_QUIZ_DETAILS: {
      base.numberOfQuestions = action.payload.number;
      base.difficulty = action.payload.difficulty;
      break;
    }
    case HANDLE_API_ERROR: {
      base.status = "Error";
      base.message = action.payload;
      break;
    }
    case HANDLE_API_FETCHING:
      base.status = "Fetching";
      break;
    case RESET_QUIZ:
      base = state;
  }
}, state);

export default reducer;
