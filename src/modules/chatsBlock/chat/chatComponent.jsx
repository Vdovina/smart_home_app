import React, {useState} from "react";
import MessageComponent from "./message";
import { TextInput } from "../../../components";
import "./styles.scss";

let messages = [
    { userName: "Полина", text: "Привет" },
    { userName: "Катя", text: "Привет" },
    { userName: "Настя", text: "Привет" }
];

function ChatComponent(props) {
    const {chatId} = props;
    const [message, setMessageValue] = useState("");
    // получить сообщения с бэка по апи messages/{chatId}

    const onSubmit = () => {
        messages.push({userName: "User", text: message.toString()});
    };

  return (
    <div className="chats-component-block-wrapper">
      <div className="chats-component-block">
        {messages.map((message) => {
          return (
            <MessageComponent
              userName={message.userName}
              message={message.message}
            />
          );
        })}
      </div>
      <TextInput
          value={message}
          onChange={(value) => setMessageValue(value)}></TextInput>
      <input className="button__send" value="Отправить" type="submit" onClick={onSubmit}/>
    </div>
  );
}

export default ChatComponent;
