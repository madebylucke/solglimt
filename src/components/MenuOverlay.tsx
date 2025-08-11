import React, { useState } from 'react';

interface MenuOverlayProps {
    onPlay?: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ onPlay }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {/* Top Menu Bar */}
            <div className="fixed top-4 left-4 z-50 flex space-x-3">

                {/* Sidebar Toggle Button */}
                <button
                    onClick={toggleSidebar}
                    className="w-12 h-12 bg-secondary rounded-md flex items-center justify-center text-primary border border-primary"
                    title="Toggle Sidebar"
                >
                    <img 
                        src="/solglimt.svg" 
                        alt="Solglimt" 
                        className={`w-8 h-8 transition-transform duration-300 ${isSidebarOpen ? 'rotate-90' : ''}`} 
                    />
                </button>

                {/* Play Button */}
                <button
                    onClick={onPlay}
                    className="w-12 h-12 bg-secondary rounded-md flex items-center justify-center text-primary border border-primary"
                    title="Play"
                >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </button>
            </div>

            {/* Sidebar */}
            <div className={`fixed top-20 left-4 bottom-4 right-4 z-40 bg-secondary border border-primary rounded-lg shadow-lg transition-all duration-100 ${isSidebarOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'
                } max-w-xl`}>
                <div className="p-6 h-full overflow-y-auto">
                    <h3 className="text-lg font-semibold text-primary mb-6">Settings</h3>

                    <div className="space-y-4">

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="snapToGrid"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="snapToGrid" className="ml-2 block text-sm text-primary">
                                Snap to grid
                            </label>
                        </div>

                        <div className="pt-4 border-t border-gray-200">
                            <button className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-md transition-colors duration-200">
                                Clear All Nodes
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default MenuOverlay;
