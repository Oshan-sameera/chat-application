import React, {useState, useEffect} from 'react'

 function Chate({ socket, usernamem, room }) {
    const [currentMassage, setCurrentMassage] = useState("");

  const sendMessage = () => {
    if (currentMassage !== "") {
      const messageDate = {
        room: room,
        author: usernamem,
        message: currentMassage,
        tiem:
          new Date(Date.now()).getHours +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      
      socket.emit("send_messsage", messageDate);
     
    }
  };

useEffect(()=>{
socket.on("recive-messAage", (data)=>{
console.log(data)
})
}, [socket])


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
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chate
