import React from "react";

function News(props) {
  const { data } = props;

  return (
    <div className="feed__news">
      <div className="feed__news--author">{data.author}</div>
      <div className="feed__news--new">{data.text}</div>
    </div>
  );
}

export default News;
