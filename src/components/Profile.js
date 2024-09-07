import React, { useState } from 'react';

// Profile component to display user information
const Profile = () => {
    // State to manage the display of the message
    const [showMessage, setShowMessage] = useState(false);

    // Retrieve profile data from localStorage
    const profileData = {
        name: localStorage.getItem('name') || 'John', // Default value if not found
        surname: localStorage.getItem('surname') || 'Doe', // Default value if not found
        entityType: localStorage.getItem('entityType') || 'Individual', // Default value if not found
        password: '********', // Placeholder for password, replace with actual value if necessary
    };

    // Function to handle the edit button click
    const handleEditClick = () => {
        setShowMessage(true); // Show the message when the button is clicked
        setTimeout(() => setShowMessage(false), 3000); // Hide the message after 3 seconds
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            {/* Page heading */}
            <h1 className="text-2xl font-bold mb-6 text-center">Profile</h1>

            {/* Name field */}
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-1">Name</label>
                <input
                    type="text"
                    value={profileData.name}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                />
            </div>

            {/* Surname field */}
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-1">Surname</label>
                <input
                    type="text"
                    value={profileData.surname}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                />
            </div>

            {/* Entity Type field */}
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-1">Entity Type</label>
                <input
                    type="text"
                    value={profileData.entityType}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                />
            </div>

            {/* Password field */}
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-1">Password</label>
                <input
                    type="password"
                    value={profileData.password}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                />
            </div>

            {/* Edit Profile Button */}
            <button
                onClick={handleEditClick}
                className="w-full p-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
                Edit Profile
            </button>

            {/* Message Display */}
            {showMessage && (
                <div className="mt-4 p-2 text-center text-red-600 text-sm">
                    Not allowed at the moment
                </div>
            )}
        </div>
    );
};

export default Profile;
