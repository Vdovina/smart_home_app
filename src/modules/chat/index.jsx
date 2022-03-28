import React from "react";
import MessageComponent from "./message";
import { TextInput, Button } from "../../components";
import "./styles.scss";

function ChatComponent() {
  let messages = [
    { userName: "Полина", message: "Привет" },
    { userName: "Полина", message: "Привет" },
    { userName: "Полина", message: "Привет" }
  ];
  return (
    <div className="chats-block-wrapper">
      <div className="chats-block">
        {messages.map((message) => {
          return (
            <MessageComponent
              userName={message.userName}
              message={message.message}
            />
          );
        })}
      </div>
      <TextInput></TextInput>
      <input className="button__send" value="Отправить" type="submit" />
    </div>
  );
}

export default ChatComponent;
