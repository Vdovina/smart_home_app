import React, { useState } from "react";
import classNames from "classnames";
import "./styles.scss";

function User() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="header__user" onClick={() => setOpened(!opened)}>
      <div className="header__user--name">
        UserName
        <div
          className={classNames(
            "dropdownmenu",
            opened && "dropdownmenu__opened"
          )}
        >
          <div className="dropdownmenu__item">Профиль</div>
          <div className="dropdownmenu__item">Выйти</div>
        </div>
      </div>
    </div>
  );
}

export default User;
