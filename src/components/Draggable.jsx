import React, { useState, useCallback } from 'react'
import { Controls, ReactFlow, applyEdgeChanges, applyNodeChanges } from '@xyflow/react'
import '@xyflow/react/dist/style.css'

function Draggable() {
  const [nodes, setNodes] = useState([
    {id: '1', position: {x: 100, y: 200}, data: {label: 'First Node'}, style: {color: 'black'}},
    {id: '2', position: {x: 500, y: 300}, data: {label: 'Second Node'}, style: {color: 'black'}},
  ])
  const onNodeChages = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  )

  const [edges, setEdges] = useState([
    {id: 'e1-2', source: '1', target: '2', label: 'to the'}
  ])

  const onEdgesChange = useCallback(
    (changes) => setEdges((nds) => applyEdgeChanges(changes, nds)),
    []
  )
  return (
    <div style={{height: '100%'}}>
      <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodeChages} onEdgesChange={onEdgesChange}>
        <Controls style={{color: 'black'}}/>
      </ReactFlow>
    </div>
  )
}

export default Draggable