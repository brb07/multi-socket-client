import React, { useEffect, useState } from "react";
import { socket } from "../App";

export const HandleSocketErrors: React.FC<{}> = () => {
  const [error, setError] = useState();
  useEffect(() => {
    socket.on("error", (error) => {
      setError(error);
      console.error(error);
    });
  }, [error]);
  return <></>;
};
