import { ACTIONS } from "./constants";

export const fetchNews = () => {debugger; return({
  type: ACTIONS.FETCH_NEWS,
})};

export const fetchNewsFailed = (error) => ({
  type: ACTIONS.FETCH_NEWS_FAILED,
  payload: error,
});

export const fetchNewsSuccessed = (data) => ({
  type: ACTIONS.FETCH_NEWS_SUCCESSED,
  payload: data,
});