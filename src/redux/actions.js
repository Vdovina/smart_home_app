import { ACTIONS } from "./constants";

export const fetchNews = () => ({
  type: ACTIONS.FETCH_NEWS,
});

export const fetchNewsFailed = (error) => ({
  type: ACTIONS.FETCH_NEWS_FAILED,
  payload: error,
});

export const fetchNewsSuccessed = (data) => ({
  type: ACTIONS.FETCH_NEWS_SUCCESSED,
  payload: data,
});

export const addNews = (data) => ({
  type: ACTIONS.ADD_NEWS,
  payload: data,
})

export const authenticate = (isAuthenticated) => ({
  type: ACTIONS.AUTHENTICATE,
  payload: isAuthenticated,
});