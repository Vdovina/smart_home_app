import React from "react";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

function ManageBlock() {
  const navigate = useNavigate();
  return (
    <div className="manage-block-wrapper">
      <div className="manage-block">
        <Button label="Управление освещением" onClick={()=> window.open("https://app.exigner.ru/player/d5643952-ab68-48b4-9432-c620b321a42a", "_blank")} />
        <Button label="Показания приборов" onClick={()=> window.open("https://app.exigner.ru/player/989a3788-8465-40f5-a0f1-83e2de03ff56", "_blank")} />
        <Button label="Просмотр бытовых приборов" onClick={()=> window.open("https://app.exigner.ru/player/fbb21ac7-5172-4c84-b8e3-d1ff8f7a8600", "_blank")} />
        <Button label="Общий чат" onClick={() => navigate('/publicChat')} />
        <Button label="Чат с управляющим" onClick={() => navigate('/privateChat')} />
      </div>
    </div>
  );
}

export default ManageBlock;
