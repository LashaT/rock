import React from "react";

function Button(props) {
  let { submitMessage } = props;

  return (
    <button
      type="submit"
      onClick={() => {
        submitMessage();
      }}
    >
      <b style={{fontSize:'2em'}}>Send</b>
    </button>
  );
}

export default Button;
