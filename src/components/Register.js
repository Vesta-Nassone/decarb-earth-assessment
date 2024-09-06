import React, { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        entityType: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    // Function to handle input changes and clear errors
    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update form data
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

    const validateForm = () => {
        
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm mx-auto"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

                {/* First Name */}
                <div className="mb-4">
                    <label className="block text-gray-700">First Name</label>
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

                {/* Last Name */}
                <div className="mb-4">
                    <label className="block text-gray-700">Last Name</label>
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

                {/* Entity Type */}
                <div className="mb-4">
                    <label className="block text-gray-700">Entity Type</label>
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

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-gray-700">Email Address</label>
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

                {/* Password */}
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
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

                {/* Confirm Password */}
                <div className="mb-4">
                    <label className="block text-gray-700">Confirm Password</label>
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
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
