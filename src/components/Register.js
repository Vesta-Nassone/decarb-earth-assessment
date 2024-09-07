import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const Register = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        entityType: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    // State to manage validation errors
    const [errors, setErrors] = useState({});
    // State to manage loading state during submission
    const [loading, setLoading] = useState(false);
    // Initialize useNavigate hook for navigation
    const navigate = useNavigate();

    // Function to handle input changes and clear errors
    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update form data state
        setFormData({
            ...formData,
            [name]: value,
        });

        // Clear the error for the specific field when the user starts typing
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '', // Clear the error message for the current field
        }));
    };

    // Function to validate form fields
    const validateForm = () => {
        const newErrors = {};

        // Check if required fields are filled
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.entityType) newErrors.entityType = 'Entity type is required';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
        if (!formData.password || formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
            newErrors.password = 'Password must include at least one special character';
        } else if (!/[A-Z]/.test(formData.password)) {
            newErrors.password = 'Password must include at least one uppercase letter';
        } else if (!/\d/.test(formData.password)) {
            newErrors.password = 'Password must include at least one number'; // Check for numeric digit
        }
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

        // Update the errors state and return true if no errors
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Function to hash the password using SHA-256
    // NOTE: Client side encryption is not recommended.
    // To keep things simple I am using this function, could also use the bcrypt library but, I wanted to avoid adding unnecessary packages.
    const hashPassword = async (password) => {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);

        // Hash the password
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);

        // Convert ArrayBuffer to hex string
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

        return hashHex;
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true); // Set loading state to true
        if (!validateForm()) {
            setLoading(false); // Set loading state to false if validation fails
            return;
        };

        // Hash the password before sending
        const hashedPassword = await hashPassword(formData.password);

        // GraphQL mutation string
        const mutation = `
            mutation testRegister($firstName: String!, $lastName: String!, $entityType: EntityType!, $email: String!, $password: String!) {
                testRegister(firstName: $firstName, lastName: $lastName, entityType: $entityType, email: $email, password: $password)
            }
        `;

        // Prepare input data with the hashed password
        const inputData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            entityType: formData.entityType,
            email: formData.email,
            password: hashedPassword,
        };

        console.log('Sending variables:', inputData);

        try {
            // Send the request to the GraphQL endpoint
            const response = await fetch('https://league-api.staging.decarb.earth/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: mutation,
                    variables: inputData,
                }),
            });

            const result = await response.json();

            if (result.errors) {
                // Handle GraphQL errors
                console.error('GraphQL errors:', result.errors);
                setErrors({ form: 'An error occurred during registration.' });
            } else {
                // Handle successful response
                const code = result.data.testRegister;
                // Save the name in localStorage and navigate to the verification page
                console.log('Registration successful:', code);
                localStorage.setItem('name', formData.firstName);
                navigate('/verify', { state: { code: code, name: formData.firstName } }); // Navigate to verification page with code and name in location state.
            }
        } catch (error) {
            // Handle fetch errors
            console.error('Fetch error:', error);
            setErrors({ form: 'An error occurred. Please try again later.' });
        } finally {
            setLoading(false); // Set loading state to false after request
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm mx-auto"
                onSubmit={handleSubmit}
            >
                <img className="mx-auto h-[80px] w-[80px]" alt="Logo" src="/images/planet.png" />
                <h2 className="mt-2 text-2xl font-bold mb-6 text-center">Register</h2>

                {/* First Name Input */}
                <div className="mb-4">
                    <label className="text-gray-700 flex items-center">
                        First Name
                        <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 block w-full p-2.5"
                    />
                    {errors.firstName && (
                        <p className="text-red-500 text-xs">{errors.firstName}</p>
                    )}
                </div>

                {/* Last Name Input */}
                <div className="mb-4">
                    <label className="text-gray-700 flex items-center">
                        Last Name
                        <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 block w-full p-2.5"
                    />
                    {errors.lastName && (
                        <p className="text-red-500 text-xs">{errors.lastName}</p>
                    )}
                </div>

                {/* Entity Type Select */}
                <div className="mb-4">
                    <label className="text-gray-700 flex items-center">
                        Entity Type
                        <span className="text-red-500 ml-1">*</span>
                    </label>
                    <select
                        name="entityType"
                        value={formData.entityType}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 block w-full p-2.5"
                    >
                        <option value="">Select an option</option>
                        <option value="ENTERPRISE">ENTERPRISE</option>
                        <option value="FINANCIER">FINANCIER</option>
                        <option value="DEVELOPER">DEVELOPER</option>
                    </select>
                    {errors.entityType && (
                        <p className="text-red-500 text-xs">{errors.entityType}</p>
                    )}
                </div>

                {/* Email Input */}
                <div className="mb-4">
                    <label className="text-gray-700 flex items-center">
                        Email Address
                        <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 block w-full p-2.5"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs">{errors.email}</p>
                    )}
                </div>

                {/* Password Input */}
                <div className="mb-4">
                    <label className="text-gray-700 flex items-center">
                        Password
                        <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 block w-full p-2.5"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-xs">{errors.password}</p>
                    )}
                </div>

                {/* Confirm Password Input */}
                <div className="mb-4">
                    <label className="text-gray-700 flex items-center">
                        Confirm Password
                        <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 block w-full p-2.5"
                    />
                    {errors.confirmPassword && (
                        <p className="text-red-500 text-xs">{errors.confirmPassword}</p>
                    )}
                </div>

                {/* Submit Button */}
                <div className="mb-6">
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={loading} // Disable button while loading
                    >
                        {loading ? "Registering..." : "Register"} {/* Show loading state */}
                    </button>
                    {errors.form && (
                        <p className="text-red-500 text-xs text-center mt-2">{errors.form}</p>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Register;
