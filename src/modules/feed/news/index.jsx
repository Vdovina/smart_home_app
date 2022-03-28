import React from "react";

function News(props) {
  const { data } = props;

  return (
    <div className="feed__news">
      <div className="feed__news--author">{data.user}</div>
      <div className="feed__news--new">{data.message}</div>
    </div>
  );
}

export default News;
