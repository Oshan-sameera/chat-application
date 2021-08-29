import React, { useState } from "react";

function Chat({ socket, usernamem, room }) {
  const [currentMassage, setCurrentMassage] = UseState("");

  const sendMessage = () => {
    if (currentMassage !== "") {
      const messageDate = {
        room: room,
        author: usernamem,
        message: cxurrentMessage,
        tiem:
          new Date(Date.now()).getHours +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageDate)
    }
  };
  return (
    <div>
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body"></div>
      <div className="chat-footer">
        <input
          type="text"
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMassage(event.target.value);
          }}
        />
        <button>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;
