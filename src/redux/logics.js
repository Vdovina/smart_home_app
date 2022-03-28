import store from "./store";
import { fetchNews, fetchNewsFailed, fetchNewsSuccessed } from "./actions";
import { API_ROUTES } from "../constants/routes";

export const getNews = async() => {
  const { dispatch } = store;
  dispatch(fetchNews());

  try {
    const data = await fetch(API_ROUTES.GET_NEWS)
    .then(response => (response.json()))
    .then(data => {
      console.log('!', data)
      return data;
    });
    debugger;
    dispatch(fetchNewsSuccessed(data['news']));
  }
  catch (e) {
    dispatch(fetchNewsFailed(e));
  }
}

export const sendNews = async(data) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }
  const res = await fetch(API_ROUTES.SEND_NEWS, requestOptions);
  debugger;

  if (res.ok) {
    const news = await res.json();
    fetchTodoSuccessed(todo.todos);
  }
}