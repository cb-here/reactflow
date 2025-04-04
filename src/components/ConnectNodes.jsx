import React, { useCallback, useState } from 'react'
import { ReactFlow, applyEdgeChanges, applyNodeChanges, Controls, Background, addEdge } from '@xyflow/react'
import "@xyflow/react/dist/style.css"

function ConnectNodes() {
    const initNodes = [
        {id: '1', position: {x: 100, y: 200}, data: {label: "First Node"}, style: {color: 'black'}},
        {id: '2', position: {x: 200, y: 300}, data: {label: "Second Node"}, style: {color: 'black'}},
        {id: '3', position: {x: 100, y: 400}, data: {label: "Third Node"}, style: {color: 'black'}},
    ]
    // let add one edge also
    const initEdges = [
        {id: 'e1-2', source: '1', target: '2', type: 'step'}
    ]
    const [nodes, setNodes] = useState(initNodes)
    const [edges, setEdges] = useState(initEdges)
    // making it draggable now
    const onNodeChanges = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        []
    )
    // now let the user add the edges using onConnect handler
    const onConnect = useCallback(
        (changes) => setEdges((eds) => addEdge(changes, eds)), []
    )
  return (
    <div style={{height: '100%', width: '100%'}}>
        <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodeChanges} onConnect={onConnect}>
            <Controls style={{color: 'black'}} />
            <Background />
        </ReactFlow>
    </div>
  )
}

export default ConnectNodes