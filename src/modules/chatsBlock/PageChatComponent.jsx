import React from "react";
import "./styles.scss";
import ChatComponent from "./chat/chatComponent";

function PageChatComponent(props) {
    const {chatId} = props;
    // предлагаю захардкодить id чатов
    const chatName = chatId === 2? "Чат с управляющим" : "Общий чат";
    return (
        <div>
            <h1>{chatName}</h1>
            <ChatComponent chatId={chatId}></ChatComponent>
        </div>
    );
}

export default PageChatComponent;