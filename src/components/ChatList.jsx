import React from "react";
import { User } from '../utils'

// TODO: change up the component to have user messages on the left
// and all other messages on the right side of the screen
function ChatList({ chatMessages }) {
  if (chatMessages !== undefined && chatMessages !== null && !chatMessages.length) {
    return <></>;
  }

  return (
    <ul className="chatlist">
      {chatMessages.map(({ username, message }, i) => {
        return (
          <li key={"user-message-" + i} className={username !== User.currentUser() ? "other-users" : ""}>
            <span style={{fontWeight: "bold"}}>{username}:</span> {message}
          </li>
        );
      })}
    </ul>
  );
}

export default ChatList;
