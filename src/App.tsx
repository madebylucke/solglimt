import { useState, useCallback } from 'react';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import PromptInput from './nodes/PromptInput';
import MenuOverlay from './components/MenuOverlay';
 
const initialNodes = [
  { id: 'prompt-1', type: 'promptInput', position: { x: 250, y: 250 }, data: { label: 'Prompt Input' } },
];
const initialEdges: any[] = [];
 
export default function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
 
  const onNodesChange = useCallback(
    (changes: any) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes: any) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect = useCallback(
    (params: any) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );

  const handlePlay = () => {
    console.log('Play button clicked - running flow...');
    // Add play/execute functionality here
  };
 
  return (
    <div style={{ width: '100vw', height: '100vh' }} className='bg-primary'>
      <MenuOverlay onPlay={handlePlay} />
      <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      nodeTypes={{ promptInput: PromptInput }}
      />
    </div>
  );
}