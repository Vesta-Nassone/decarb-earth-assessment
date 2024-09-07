import React from 'react';

const BarPlaceholder = () => {
    return (
        <div role="status" className="w-full p-4 border border-gray-200 rounded shadow animate-pulse">
            <div className="flex items-baseline mt-4">
                <div className="w-full bg-gray-200 rounded-t-lg h-72"></div>
                <div className="w-full h-56 ms-6 bg-gray-200 rounded-t-lg"></div>
                <div className="w-full bg-gray-200 rounded-t-lg h-72 ms-6"></div>
                <div className="w-full h-64 ms-6 bg-gray-200 rounded-t-lg"></div>
                <div className="w-full bg-gray-200 rounded-t-lg h-80 ms-6"></div>
                <div className="w-full bg-gray-200 rounded-t-lg h-72 ms-6"></div>
                <div className="w-full bg-gray-200 rounded-t-lg h-80 ms-6"></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    );
};

export default BarPlaceholder;
