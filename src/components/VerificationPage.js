import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Verification = () => {
    const location = useLocation();
    const [inputCode, setInputCode] = useState('');
    const [message, setMessage] = useState('');
    const [isVerified, setIsVerified] = useState(false);

    const storedCode = location.state?.code; // Get the verification code from location state

    const handleChange = (e) => {
        setInputCode(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputCode === storedCode) {
            setIsVerified(true);
            setMessage('Verification successful!');
            // Redirect or handle successful verification
        } else {
            setIsVerified(false);
            setMessage('Verification code does not match.');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm mx-auto"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Verify Your Code</h2>
                <div className="mb-4">
                    <label className="block text-gray-700">Verification Code</label>
                    <input
                        type="text"
                        value={inputCode}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 block w-full p-2.5"
                        placeholder='Please enter the verification code'
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Verify
                </button>
                {message && (
                    <p className={`mt-4 text-xs ${isVerified ? 'text-green-500' : 'text-red-500'}`}>{message}</p>
                )}
            </form>
        </div>
    );
};

export default Verification;
