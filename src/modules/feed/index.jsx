import React, { useState } from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
import News from "./news";
import "./styles.scss";

function Feed() {
  const { feedData } = useSelector((state) => state);

  return (
    <div className="feed-wrapper">
      <div className="feed__header">Главная</div>
      <div className="feed">
        {(!feedData || feedData.news.length === 0) && <div>Новостей нет</div>}
        {feedData &&
          feedData.length !== 0 &&
          feedData.news.map((item) => <News data={item} />)}
      </div>
    </div>
  );
}

export default Feed;
