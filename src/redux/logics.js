import store from "./store";
import { fetchNews, fetchNewsFailed, fetchNewsSuccessed } from "./actions";
import { API_ROUTES } from "../constants/routes";

export const getNews = async() => {
  const { dispatch } = store;
  // debugger;
  dispatch(fetchNews());

  // debugger;
  try {
    const data = await fetch(API_ROUTES.GET_NEWS)
    .then(response => (response.json()))
    .then(data => {
      console.log('!', data)
      return data;
    });
    dispatch(fetchNewsSuccessed(data));
  }
  catch (e) {
    dispatch(fetchNewsFailed(e));
  }
}