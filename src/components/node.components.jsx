import React , { useCallback, useState } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  MarkerType
} from "reactflow";
import "reactflow/dist/style.css";

import CustomNode from "./CustomNode.js";
import CustomEdge from "./custom_edge.js";

import data from "./data.json";

const rfStyle = {
  backgroundColor: "#B8CEFF"
};

const edgeTypes = {
    custom: CustomEdge,
  };

// const node = data.nodes;
// console.log(node);

const initialNodes = [
  {
    id: "node-1",
    type: "textUpdater",
    position: { x: 0, y: 0 },
    data: { value: 123, title: "User" }
  },
  {
    id: "node-2",
    type: "textUpdater",
    position: { x: 300, y: 0 },
    data: { value: 1234, title: "User-2" }
  },
  {
    id: "node-3",
    type: "textUpdater",
    position: { x: 300, y: 200 },
    data: { value: 1234, title: "User-3" }
  }
];

const initialEdges = [
    {
      id: 'edges-e1-2',
      source: 'node-1',
      target: 'node-2',
      label: 'Associated with',
      className: 'normal-edge',
      type:'custom',
      markerEnd: {
        type: MarkerType.Arrow,
      },
    },
    {
      id: 'edges-e1-3',
      source: 'node-1',
      target: 'node-3',
      label: 'Associated to',
      className: 'normal-edge',
      type:'straight',
      markerEnd: {
        type: MarkerType.Arrow,
      },
    },
]

const nodeTypes = { textUpdater: CustomNode };

function Flow() {
  const [nodes, setNodes] = useState(data.nodes);
  const [name, setName] = useState("");
  const [edges, setEdges] = useState(data.edges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => {
        console.log("Edges,",JSON.stringify(eds))
        const new_edg = {
            ...eds,
            // label: 'straight'
        }
        return addEdge(connection, eds)
    }),
    [setEdges]
  );

  const addNode = () => {
    setNodes((e) =>
      e.concat({
        id: (e.length + 1).toString(),
        data: { title: `${name}` },
        type: "textUpdater",
        position: {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight
        }
      })
    );
  };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      edgeTypes={edgeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
    //   style={rfStyle}
      style={{background:'white'}}
    >
      <div style={{zIndex:200, position:'fixed', top:10, left:10}}>
      
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          name="title"
        />
        <button type="button" onClick={addNode}>
          Add Node
        </button>
        <button onClick={()=>{console.log(nodes, edges, JSON.stringify(nodes),JSON.stringify(edges))}}>Log Data</button>
      </div>

      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  );
}

export default Flow;
