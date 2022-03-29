import React from "react";
import { Button } from "../../components";
import "./styles.scss";
import PageChatComponent from "./PageChatComponent";

function openPrivateChat() {
    // открыть чат с управляющим по id
  console.log("open private chat")
}

function openPublicChat() {
    // открыть чат общий чат по id
    console.log("open public chat")
}

function ChatsBlock() {
    return (
        <div className="chats-block-wrapper">
            <div className="chats-block">
                <Button label="Чат с управляющим" onClick={openPrivateChat()}/>
                <Button label="Общий чат" onClick={openPublicChat()}/>
            </div>
        </div>
    );
}

export default ChatsBlock;