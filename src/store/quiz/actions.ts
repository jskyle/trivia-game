import { createAction } from "../utils";

export const SET_FETCHED_QUESTIONS = "SET_FETCHED_QUESTIONS";
export const setFetchedQuestions = createAction(SET_FETCHED_QUESTIONS);

export const SET_QUESTION_RESPONSE = "SET_QUESTION_RESPONSE";
export const updateQuestionResponse = createAction(SET_QUESTION_RESPONSE);

export const HANDLE_API_ERROR = "HANDLE_API_ERROR";
export const handleApiError = createAction(HANDLE_API_ERROR);

export const HANDLE_API_FETCHING = "HANDLE_API_FETCHING";
export const handleApiFetching = createAction(HANDLE_API_FETCHING);
