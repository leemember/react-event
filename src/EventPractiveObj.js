import React, { useState } from "react";

const EventPracticeObj = () => {
  const [form, setForm] = useState({
    username: "",
    msg: "",
  });

  const { username, msg } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ": " + msg);
    setForm({
      username: "",
      msg: "",
    });
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
        onChange={onChange}
      />

      <input
        type="text"
        name="message"
        placeholder="메세지내용"
        value={msg}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};
export default EventPracticeObj;
