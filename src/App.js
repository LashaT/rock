import React, { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import ChatList from "./components/ChatList";
import { Bot } from "./bot";
import { createMessagePayload, User } from './utils';

// const socket = io("http://localhost:5000");

const App = () => {
  const [state, setState] = useState({
    chatMessages: [],
    currentMessage: "",
  });

  const updateMessage = function (event) {
    setState({
      ...state,
      currentMessage: event.currentTarget.value,
    });
  };

  // add the message to the chatMessages array, and clear input
  const submitMessage = function () {
    const trimmedMessage = state.currentMessage.trim();
    if (!trimmedMessage) {
      return;
    }

    // parse and check if it user's message is actually a bot command
    // else ignore
    const botResponse = Bot.parseCommand(trimmedMessage);

    if (botResponse) {
      setState({
        ...state,
        chatMessages: [...state.chatMessages, createMessagePayload(User.currentUser(), state.currentMessage), botResponse],
        currentMessage: "",
      });

      return;
    }

    setState({
      ...state,
      chatMessages: [...state.chatMessages, createMessagePayload(User.currentUser(), state.currentMessage)],
      currentMessage: "",
    });
  };

  return (
    <div className="App">
      <div id="wrapper">
        <div id="upperPanel">
          <div
            id="chat"
            className="container"
            style={{
              backgroundImage: `url("https://img.pngio.com/space-hd-png-transparent-space-hdpng-images-pluspng-spacepng-1280_720.png")`,
            }}
          >
            <div></div>
            <ChatList chatMessages={state.chatMessages} />
            {/* <ul style={{ ListStyleType: "none" }}>
              
            </ul> */}
          </div>
          <div id="friends">
            <ul></ul>
          </div>
        </div>
        <div id="bottomPanel">
          <Input
            type="submit"
            style={{ width: "100%", height: "100px" }}
            message={state.currentMessage}
            updateMessage={updateMessage}
            submitMessage={submitMessage}
          />{" "}
          <Button submitMessage={submitMessage} />
        </div>
      </div>
    </div>
  );
};

export default App;
