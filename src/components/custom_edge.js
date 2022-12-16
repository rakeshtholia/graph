import React from 'react';
import { getBezierPath, getStraightPath, StraightEdge } from 'reactflow';

export default function CustomEdge(props) {
  const [edgePath] = getStraightPath({
    sourceX: props.sourceX,
    sourceY: props.sourceY,
    sourcePosition: props.sourcePosition,
    targetX: props.targetX,
    targetY: props.targetY,
    targetPosition: props.targetPosition,
  });

//   return (
//     <>
//       <path
//         id={id}
//         className="react-flow__edge-path customEdge"
//         style={style}
//         d={edgePath}
//         markerEnd={markerEnd}
//       />
//       <text>
//         <textPath
//           href={`#${id}`}
//           style={{ fontSize: '12px', backgroundColor:'white'}}
//           startOffset="50%"
//           textAnchor="middle"
//           backgroundColor="green"
//         >
//           {label}
//         </textPath>
//       </text>
//     </>
//   );
return <StraightEdge {...props} style={{strokeWidth:10, stroke: 'seagreen', }}/>
}
