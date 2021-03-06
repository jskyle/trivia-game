import { createAction } from "../utils";

export const SET_FETCHED_QUESTIONS = "SET_FETCHED_QUESTIONS";
export const setFetchedQuestions = createAction(SET_FETCHED_QUESTIONS);

export const SET_QUESTION_RESPONSE = "SET_QUESTION_RESPONSE";
export const setQuestionResponse = createAction(SET_QUESTION_RESPONSE);

export const SET_QUIZ_HEADER = "SET_QUIZ_HEADER";
export const setQuizHeader = createAction("SET_QUIZ_HEADER");

export const SET_QUIZ_DETAILS = "SET_QUIZ_DETAILS";
export const setQuizDetails = createAction(SET_QUIZ_DETAILS);

export const HANDLE_API_ERROR = "HANDLE_API_ERROR";
export const handleApiError = createAction(HANDLE_API_ERROR);

export const HANDLE_API_FETCHING = "HANDLE_API_FETCHING";
export const handleApiFetching = createAction(HANDLE_API_FETCHING);

export const SET_API_TOKEN = "SET_API_TOKEN";
export const setApiToken = createAction(SET_API_TOKEN);

export const RESET_QUIZ = "RESET_QUIZ";
export const resetQuiz = createAction(RESET_QUIZ);
