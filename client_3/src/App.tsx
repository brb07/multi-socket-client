import { useEffect } from "react";
import "./App.css";
import { io } from "socket.io-client";
import JoinUser from "./components/JoinUser";
import { HandleSocketErrors } from "./components/OnError";

const token = import.meta.env["VITE_APP_AUTH_KEY"];
const url = import.meta.env["VITE_APP_SOCKET_URL"];

console.log(token);

export const socket = io(url, {
  transportOptions: {
    polling: {
      extraHeaders: {
        Authorization: `Bearer ${token}`,
      },
    },
  },
});

function App() {
  useEffect(() => {
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <h1>Client 3</h1>
      <JoinUser />
      <HandleSocketErrors />
    </>
  );
}

export default App;
