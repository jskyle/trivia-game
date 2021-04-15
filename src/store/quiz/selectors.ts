import { createSelector as createCachedSelector } from "reselect";
import { createSelectorContext } from '../utils';

const createSelector = createSelectorContext(['quiz']);

export const getQuestions = createSelector("quiz");
export const getToken = createSelector("token");
export const getStatus = createSelector("status");
export const getErrorMessage = createSelector("message");
export const getDifficulty = createSelector("difficulty");
export const getNumberOfQuestions = createSelector("numberOfQuestions");

export const getQuizDetails = createCachedSelector(
  getNumberOfQuestions,
  getDifficulty,
  getToken,
  getStatus,
  (numberOfQuestions: any, difficulty: string, token: string, status: string) => {
    return {numberOfQuestions, difficulty, token, status};
  });
