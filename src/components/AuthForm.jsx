import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { toast } from 'react-toastify'; // Import toast for notifications

const AuthForm = () => {
    const { register, login } = useContext(AuthContext);
    const [isRegistering, setIsRegistering] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isRegistering) {
            await register(formData.name, formData.email, formData.password);
            setIsRegistering(false); // Set back to login mode after registration
            toast.info('Please log in to continue.'); // Notify the user to log in
        } else {
            await login(formData.email, formData.password);
        }
        navigate('/'); // Redirect to home page after successful login or registration
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="w-1/2 p-8 bg-white rounded-lg shadow-lg space-y-6">
                {isRegistering && (
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Name</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                )}
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Email</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Password</label>
                    <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        {isRegistering ? 'Register' : 'Login'}
                    </button>
                    <button type="button" onClick={() => setIsRegistering(!isRegistering)} className="text-blue-500 hover:text-blue-700 font-bold">
                        {isRegistering ? 'Login' : 'Register'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AuthForm;
