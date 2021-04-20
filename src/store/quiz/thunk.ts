import { Dispatch } from 'redux';
import {
  fetchQuestions,
  fetchSessionToken,
} from "./api"

import * as actions from './actions';
import { getQuizDetails } from './selectors';
 

export const fetchSessionTokenThunk = () => async (dispatch: Dispatch) => {

  dispatch(actions.handleApiFetching());

  return fetchSessionToken().then(({data}) => {
    dispatch(actions.setApiToken(data.token));
  }).catch((err) => {
    dispatch(actions.handleApiError(err));
  })
}

export const fetchQuestionsThunk = () => async (dispatch: Dispatch, getState: Function) => {
  const state = getState();
  const {token, numberOfQuestions, difficulty} = getQuizDetails(state);
  dispatch(actions.handleApiFetching());

  return fetchQuestions(difficulty, numberOfQuestions, token).then(({data}) => {

    dispatch(actions.setFetchedQuestions(data.results));
  })
}
