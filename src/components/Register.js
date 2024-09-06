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
        const newErrors = {};

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
        }
        // Could end another check for number but that's probably overkill...
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Perform form submission (e.g., API call)
            console.log("Form Data Submitted:", formData);
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
