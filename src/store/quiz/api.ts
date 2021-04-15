import axios from 'axios';

export const fetchQuestions = (difficulty: string, amount: number = 10, token: string) => {
  return axios.get(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=boolean&token=${token}`);
};

export const fetchSessionToken = () => {
  return axios.get(`https://opentdb.com/api_token.php?command=request`);
};
