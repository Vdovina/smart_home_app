import React from "react";

function MessageComponent(props) {
  const { userName, message } = props;

  return (
    <div className="message-wrapper">
      <div className="message-block">
        <span>{userName} : </span>
        <span>{message}</span>
      </div>
    </div>
  );
}

export default MessageComponent;
