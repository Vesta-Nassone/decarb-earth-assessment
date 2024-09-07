import React from 'react';
import './ScatterPlaceholder.css'; // Import the CSS file for styling

const ScatterPlaceholder = () => {
    return (
        <div role="status" className="w-full p-4 border border-gray-200 rounded shadow animate-pulse">
            <div className="flex items-baseline mt-4 h-[250px]">
                <div className="scatter-placeholder-container w-full">
                    <div className="scatter-placeholder-line">
                        {[...Array(20)].map((_, index) => (
                            <div
                                key={index}
                                className="scatter-placeholder-dot"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            />
                        ))}
                    </div>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default ScatterPlaceholder;
