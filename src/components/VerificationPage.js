import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Mock API request function to simulate code verification
const mockApiRequest = (inputCode, storedCode) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate a successful response when input matches the stored code
            if (inputCode === String(storedCode)) {
                resolve(true);
            } else {
                reject(false);
            }
        }, 1000); // Simulate network delay of 1 second
    });
};

const Verification = () => {
    const location = useLocation(); // Retrieve the location object to access state passed from previous pages
    const navigate = useNavigate(); // Initialize useNavigate to programmatically navigate between pages
    const [inputCode, setInputCode] = useState(''); // State to store user input for the verification code
    const [message, setMessage] = useState(''); // State to store messages (success/error)
    const [isVerified, setIsVerified] = useState(false); // State to track verification status
    const [loading, setLoading] = useState(false); // State to handle loading state during verification
    const [viewPassword, setViewPassword] = useState(false); // State to toggle the visibility of the verification code

    const storedCode = location.state?.code; // Retrieve the verification code from the location state

    // Handle input changes for the verification code field
    const handleChange = (e) => {
        setInputCode(e.target.value);
    };

    // Toggle function to show or hide the verification code
    const toggleViewPassword = (e) => {
        e.preventDefault();
        setViewPassword(!viewPassword);
    };

    // Handle form submission and verification of the input code
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading

        try {
            // Simulate API call to verify the code
            const result = await mockApiRequest(inputCode, storedCode);

            if (result) {
                setIsVerified(true); // Set verified status to true if the codes match
                setMessage('Verification successful!'); // Display success message
                // Redirect to dashboard upon successful verification
                // Use replace true to prevent push the to history. Cannot go back to verify by pressing the back button in the browser.
                navigate('/dashboard', { replace: true });
            } else {
                setIsVerified(false); // Set verified status to false if the codes don't match
                setMessage('Verification code does not match.'); // Display error message
            }
        } catch (error) {
            setIsVerified(false); // Handle error scenario
            setMessage('Verification failed. Please try again.'); // Display error message
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            {/* Form to verify the code */}
            <form
                className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm mx-auto"
                onSubmit={handleSubmit}
            >
                {/* Header with title and toggle button for viewing the code */}
                <div className='flex items-center mb-6'>
                    <h2 className="text-2xl font-bold text-center mr-3">Verify Your Code</h2>
                    {viewPassword ? (
                        <button
                            name="hide-password"
                            title="hide password"
                            onClick={toggleViewPassword}
                            className="p-2"
                        >
                            {/* Icon for hiding the code */}
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="w-6 h-6 text-gray-500 transition duration-75">
                                <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
                            </svg>
                        </button>
                    ) : (
                        <button
                            name="view-password"
                            title="view password"
                            onClick={toggleViewPassword}
                            className="p-2"
                        >
                            {/* Icon for viewing the code */}
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="w-6 h-6 text-gray-500 transition duration-75">
                                <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                            </svg>
                        </button>
                    )}
                </div>

                {/* Input field for entering the verification code */}
                <div className="mb-4">
                    <label className="flex items-center text-gray-700">
                        Verification Code
                        <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                        type="text"
                        value={inputCode}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 block w-full p-2.5"
                        placeholder='Please enter the verification code'
                    />
                </div>

                {/* Submit button with loading state */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    {loading ? 'Verifying...' : "Verify"}
                </button>

                {/* Display success or error message based on verification status */}
                {message && (
                    <p className={`mt-4 text-xs ${isVerified ? 'text-green-500' : 'text-red-500'}`}>{message}</p>
                )}

                {/* Conditionally render the code based on visibility */}
                {viewPassword && (
                    <div className="text-lg text-gray-700">
                        <p>Your verification code is: <span className="font-bold">{storedCode}</span></p> {/* Display the verification code */}
                    </div>
                )}
            </form>
        </div>
    );
};

export default Verification;
