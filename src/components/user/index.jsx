import React, { useState } from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
import {ReactComponent as ProfilePicture} from '../../assets/images/person-circle.svg';
import "./styles.scss";

function User() {
  const { userData } = useSelector((state) => state);
  const [opened, setOpened] = useState(false);

  return (
    <div className="header__user" onClick={() => setOpened(!opened)}>
      <div className="header__user--picture">
        <ProfilePicture />
      </div>
      <div className="header__user--name">
        {userData.name}
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
