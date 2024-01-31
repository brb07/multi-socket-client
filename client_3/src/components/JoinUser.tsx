import { useEffect, useState } from "react";
import { socket } from "../App";

const JoinUser: React.FC<{}> = () => {
  const [val, setVal] = useState("");
  const [kiss, setKiss] = useState("");
  useEffect(() => {
    socket.on("get_dag_response", (val) => {
      setKiss(val);
    });
  }, [val, kiss]);

  return (
    <div>
      <button
        onClick={() =>
          socket.emit("join", "13", (val: string) => {
            setVal(val);
          })
        }
      >
        Join
      </button>
      <button
        onClick={() =>
          socket.emit("leave", "13", (val: string) => {
            setVal(val);
          })
        }
      >
        Leave
      </button>

      <button
        onClick={() =>
          socket.emit("send_dag", [
            {
              id: "4cc9c199-8114-4b08-8ceb-16aea07b5c47",
              type: "source",
              name: "Authentication",
              metadata: {
                action: "read_data",
                dataset_id: "9",
                table_id: "83",
              },
            },
            {
              id: "7d0031ff-0181-4280-818c-80e0dc89227e",
              type: "source",
              name: "AvailableConnectors",
              metadata: {
                action: "read_data",
                dataset_id: "9",
                table_id: "84",
              },
            },
            {
              id: "cd3d332e-a5c8-4d06-934f-7135aa367ddb",
              type: "source",
              name: "ConnectionTables",
              metadata: {
                action: "read_data",
                dataset_id: "9",
                table_id: "86",
              },
            },
          ])
        }
      >
        SEND_DAG
      </button>
      <h3>{val}</h3>
      <h6>MSG:{kiss}</h6>
    </div>
  );
};

export default JoinUser;
