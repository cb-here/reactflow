import { ReactFlow, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import React from 'react'
import './App.css'
import FlowChart from './components/FlowChart';
import Draggable from './components/Draggable';
import ConnectNodes from './components/ConnectNodes';

function App() {
  return (
      <div style={{ height: '90vh', width: '90vw'}}>
        {/* <FlowChart /> */}
        {/* <Draggable /> */}
        <ConnectNodes />
      </div>
  )
}
 
export default App