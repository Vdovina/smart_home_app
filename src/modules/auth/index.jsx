import React, { useState } from "react";
import { TextInput, MaskedInput } from "../../components";
import "./styles.scss";

function AuthPage(props) {
  const [phoneValue, setPhoneValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <div className="auth-page-wrapper">
      <div className="auth-page">
        <h1>Добро пожаловать в нашу систему</h1>
        <form onSubmit={props.onSubmit}>
          <MaskedInput
            value={phoneValue}
            label="Введите номер телефона"
            mask="+7 (999) 999-99-99"
            placeholder="+7 (999) 999-99-99"
            onChange={(value) => setPhoneValue(value)}
          />
          <TextInput
            value={passwordValue}
            label="Введите пароль"
            type="password"
            onChange={(value) => setPasswordValue(value)}
          />
          <input
            className="button__submit"
            value="Вход в систему"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}

export default AuthPage;
