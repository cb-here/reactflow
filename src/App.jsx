import { ReactFlow, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import React from 'react'
import './App.css'
import FlowChart from './components/FlowChart';
import Draggable from './components/Draggable';

function App() {
  return (
      <div style={{ height: '100vh', width: '100vw'}}>
        {/* <FlowChart /> */}
        <Draggable />
      </div>
  )
}
 
export default App