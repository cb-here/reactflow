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
        }, // adding three more node now
        {
            id: '4',
            position: {x: 100, y: 400},
            data: {label: 'Forth Node'},
            style: {
                color: 'black'
            }
        },
        {
            id: '5',
            position: {x: 600, y: 500},
            data: {label: 'Fifth Node'},
            style: {
                color: 'black'
            }
        },
        {
            id: '6',
            position: {x: 100, y: 600},
            data: {label: 'Sixth Node'},
            style: {
                color: 'black'
            }
        },
    ]
    const edges = [
        {id: 'e1-2', source: '1', target: '2', type: 'step', label: 'to the'},
        {id: 'e2-3', source: '2', target: '3', type: 'step', label: 'to the'},
        // lets add three and four also
        {id: 'e3-4', source: '3', target: '4', type: 'step', label: "to the"},
        // adding the edges now but in opposite direction 
        {id: 'e6-5', source: '6', target: '5', type: 'step', label: 'from 6 to 5'},
        {id: 'e5-4', source: '5', target: '4', type: 'step', label: 'from 5 to 4'},
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