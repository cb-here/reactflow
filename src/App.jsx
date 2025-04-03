import { ReactFlow, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import React from 'react'
import './App.css'
import FlowChart from './components/FlowChart';

function App() {
  return (
      <div style={{ height: '100vh', width: '100vw'}}>
        <FlowChart />
      </div>
  )
}
 
export default App