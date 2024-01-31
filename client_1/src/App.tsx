import { useEffect } from "react";
import "./App.css";
import { io } from "socket.io-client";
import JoinUser from "./components/JoinUser";

const token = import.meta.env["VITE_APP_AUTH_KEY"];
const url = import.meta.env["VITE_APP_SOCKET_URL"];

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
  console.log({ token, url });

  useEffect(() => {
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <h1>Client 1</h1>
      <JoinUser />
    </>
  );
}

export default App;
