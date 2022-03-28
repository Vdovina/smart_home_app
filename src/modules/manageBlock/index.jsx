import React from "react";
import { Button } from "../../components";
import "./styles.scss";

function ManageBlock() {
  return (
    <div className="manage-block-wrapper">
      <div className="manage-block">
        <Button label="Управление освещением" />
        <Button label="Показания приборов" />
        <Button label="Просмотр бытовых приборов" />
      </div>
    </div>
  );
}

export default ManageBlock;
