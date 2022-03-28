import React, { useState } from "react";
import { TextInput } from "../../components";

function SendPanel(props) {
  const { data } = props;
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="feed__send-panel">
      <form className="feed__send-panel--form" onSubmit={null}>
        <TextInput
          className='feed__send-panel--input'
          value={inputValue}
          onChange={(value) => setInputValue(value)}
        />
        <input
          className="feed__send-panel--button"
          type='submit'
          value='>>'
        />
      </form>
    </div>
  );
}

export default SendPanel;
