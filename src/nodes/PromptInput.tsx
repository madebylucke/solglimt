import React, { memo } from 'react';
import { Handle, Position, NodeProps } from '@xyflow/react';

type PromptInputProps = NodeProps & {
    data: {
        label?: string;
        value?: string;
        onChange?: (value: string) => void;
    };
};

const PromptInput: React.FC<PromptInputProps> = ({ data, id, selected }) => {
    const inputValue = data.value || 'Enter your prompt here...';

    const handleNodeClick = () => {
        // Node click handling is managed by ReactFlow
        console.log(`Node ${id} clicked`);
    };

    return (
        <div 
            className={`p-2 border rounded-lg min-w-36 transition-all duration-200 cursor-pointer bg-secondary ${
                selected 
                    ? 'border-gray-200 hover:bg-gray-50 hover:shadow-md ' 
                    : 'border-primary'
            }`}
            onClick={handleNodeClick}
        >
            <label htmlFor={`prompt-input-${id}`} className={`block font-semibold mb-2 ${
                selected ? 'text-white' : 'text-primary'
            }`} style={{ fontSize: '0.65rem' }}>
                {data.label || 'Prompt'}
            </label>
            <div
                className={`w-full px-3 py-2 rounded-md border ${
                    selected 
                        ? 'text-white bg-primary border-white/20' 
                        : 'text-secondary bg-tertiary border-none'
                }`}
                 style={{ fontSize: '0.5rem' }}
            >
                {inputValue}
            </div>
            <Handle type="target" position={Position.Right} className={`bg-secondary ${
                selected 
                    ? 'border-gray-200' 
                    : 'border-primary'
            }`}/>
        </div>
    );
};

export default memo(PromptInput);