import { ReactFlow, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
 
function FlowChart() {
    const nodes = [
        {
            id: '1',
            position: {x: 100, y: 100},
            data: {label: 'First Node'},
            style: {
                color: 'black'
            }
        },
        {
            id: '2',
            position: {x: 600, y: 200},
            data: {label: 'Second Node'},
            style: {
                color: 'black'
            }
        },
        {
            id: '3',
            position: {x: 100, y: 300},
            data: {label: 'Third Node'},
            style: {
                color: 'black'
            }
        },
    ]
    const edges = [
        {id: 'e1-2', source: '1', target: '2', type: 'step', label: 'to the'},
        {id: 'e2-3', source: '2', target: '3', type: 'step', label: 'to the'}
    ]
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <ReactFlow nodes={nodes} edges={edges}>
        <Background />
        <Controls style={{color: 'black'}} />
      </ReactFlow>
    </div>
  );
}
 
export default FlowChart;