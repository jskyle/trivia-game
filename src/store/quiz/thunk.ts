import { Dispatch } from 'redux';
import {
  fetchQuestions,
  fetchSessionToken,
} from "./api"

import * as actions from './actions';
import { getQuizDetails } from './selectors';
import { convertArrayToObject } from '../utils'; 
 

export const fetchSessionTokenThunk = () => async (dispatch: Dispatch) => {

  dispatch(actions.handleApiFetching());

  return fetchSessionToken().then((res: any) => {
    dispatch(actions.setApiToken(res));
  }).catch((err) => {
    dispatch(actions.handleApiError(err));
  })
}

export const fetchQuestionsThunk = () => async (dispatch: Dispatch, getState: Function) => {
  const state = getState();
  const {token, numberOfQuestions, difficulty} = getQuizDetails(state);
  dispatch(actions.handleApiFetching());

  return fetchQuestions(difficulty, numberOfQuestions, token).then((res: any) => {

    const questions = convertArrayToObject(res.results, "question");

    dispatch(actions.setFetchedQuestions(questions));
  })
}
