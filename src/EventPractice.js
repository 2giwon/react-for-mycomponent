import { useState } from "react";

function EventPractice() {
  const [value, setValue] = useState("");
  const onChange = (event) => setValue(event.target.value);
  const onClick = () => {
    alert(value);
    setValue("");
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="message"
        value={value || ""}
        placeholder="anything input"
        onChange={onChange}
        onKeyUp={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
}

export default EventPractice;
