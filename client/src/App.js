import "./App.css";
import{useState} from "react";
import io from "socket.io-client";
import Chate from "./Chate";

const socket = io.connect("http://localhost:3001");

function App() {
  const [userName, setUserName] = useState("");
  const [room, SetRoom] = useState("");

  const joinRoom = () => {
    if (userName !== "" && room !== "") {
      socket.emit("join_room", room);
    }
  };
  return (
    <div className="App">
      <h3>Join A Chat</h3>
      <input
        type="text"
        placeholder="Osh..."
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Room ID...."
        onChange={(event) => {
          SetRoom(event.target.value);
        }}
      />
      <button onClick={joinRoom}>Join A Room</button>
      <Chate socket={socket} userName={userName} room={room}></Chate>
      
    </div>
  );
}

export default App;
