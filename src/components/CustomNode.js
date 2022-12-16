import React , { useCallback } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { Top: 10 };

function CustomNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div
      style={{
        height: "100px",
        width: "100px",
        backgroundColor: "darkseagreen",
        borderRadius: "50%",
        border: "3px solid seagreen"
      }}
    >
      <Handle type="target" position={Position.Left} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%"
        }}
      >
      <span>{data.title}</span>
      </div>
      <Handle type="source" position={Position.Right} id="b" />
    </div>
  );
}

export default CustomNode;
