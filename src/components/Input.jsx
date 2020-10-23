import React from "react";

// props
// {
//   message: "some string",
//   updateMessage: function() {},
//   submitMessage: function() {},
// }

function Input(props) {
  let { message, updateMessage, submitMessage } = props;

  return (
    <input
      type="text"
      placeholder="enter your message"
      value={message}
      onChange={(event) => updateMessage(event)}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          submitMessage();
        }
      }}
    />
  );
}

export default Input;
