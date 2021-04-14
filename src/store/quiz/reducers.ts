import { produce } from "immer";

import {
  SET_FETCHED_QUESTIONS,
  SET_QUESTION_RESPONSE,
  HANDLE_API_ERROR,
  HANDLE_API_FETCHING,
} from "./actions"


const state = {
  questions: [],
  status: "Initial",
  message: "",
};

export const path = ["uiStore", "smartStackerListView", "filters"];

const reducer = produce<any>((base: any, action: any) => {
  switch (action.type) {
    case SET_FETCHED_QUESTIONS: {
      base.status = "Success";
      base.questions = action.payload;
      break;
    }
    case SET_QUESTION_RESPONSE: {
      base.questions[action.payload.idx] = {
        ...base.questions[action.payload.idx],
        response: action.payload.response,
      }
      break;
    }
    case HANDLE_API_ERROR: {
      base.status = "Error";
      base.message = action.payload;
      break;
    }
    case HANDLE_API_FETCHING: 
      base.status = "Fetching";
  }
}, state);

export default reducer;
