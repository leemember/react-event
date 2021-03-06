import React, { useState } from "react";

const EventPractice = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMsg = (e) => setMessage(e.target.value);

  const onClick = () => {
    alert(username + ":" + message + "입니다.");
    setUsername("");
    setMessage("");
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="사용자 명"
        value={username}
        onChange={onChangeUsername}
      />
      :
      <input
        type="text"
        name="message"
        placeholder="메세지내용"
        value={message}
        onChange={onChangeMsg}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};
export default EventPractice;
