import React, { useState } from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
import News from "./message";
import SendPanel from "./sendPanel";
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
          feedData.news.map((item) => <News key={item.id} data={item} />)}
      </div>
      <div className="feed__send-panel--wrapper">
        <SendPanel />
      </div>
    </div>
  );
}

export default Feed;
