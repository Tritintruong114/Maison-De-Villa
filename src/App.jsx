import { Outlet } from "react-router-dom";
import TopNavBar from "./components/TopNavBar";
import io from "socket.io-client";
import Chat from "./components/chat/Chat";
import { useState } from "react";

const socket = io.connect("http://127.0.0.1:5174");

function App() {
  const [username, setUsername] = useState(""); // Add this
  const [room, setRoom] = useState(""); // Add this

  return (
    <div className="flex no-scrollbar bg-opacity-60 bg-darkBrown overflow-hidden h-screen flex-col items-center">
      {/* <div className="text-black sm:mt-9 sm:py-6 bg-white w-full bg-slate-400 max-w-screen-2xl">
        <TopNavBar />
      </div>
      <div className="text-black overflow-scroll no-scrollbar h-screen bg-white w-full bg-slate-400 max-w-screen-2xl">
        <Outlet />
      </div> */}
      <Chat
        username={username}
        setUsername={setUsername}
        room={room}
        setRoom={setRoom}
        socket={socket}
      />
    </div>
  );
}

export default App;
