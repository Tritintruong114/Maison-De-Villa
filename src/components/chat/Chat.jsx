import io from "socket.io-client";
import { useNavigate } from "react-router-dom";
const socket = io.connect("http://127.0.0.1:5174");

const Chat = ({ username, setUsername, room, setRoom, socket }) => {
  const navigate = useNavigate();
  const joinRoom = () => {
    if (room !== "" && username !== "") {
      socket.emit("join_room", { username, room });
    }
    navigate("/chat", { replace: true });
  };
  return (
    <div>
      <div>
        <h1>{`<>DevRooms</>`}</h1>
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username..."
        />

        <select onChange={(e) => setRoom(e.target.value)}>
          <option>-- Select Room --</option>
          <option value="javascript">JavaScript</option>
          <option value="node">Node</option>
          <option value="express">Express</option>
          <option value="react">React</option>
        </select>

        <button onClick={joinRoom}>Join Room</button>
      </div>
    </div>
  );
};

export default Chat;
