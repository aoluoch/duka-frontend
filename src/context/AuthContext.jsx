import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Check for user session on page load
    const checkSession = async () => {
        try {
            const response = await axios.get('https://dukaapp-1.onrender.com/check_session');
            if (response.data) {
                setUser(response.data); // Assuming response has user data
            }
        } catch (error) {
            setUser(null);
        }
    };

    useEffect(() => {
        checkSession();
    }, []);

    // Persist user state on refresh
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    // Register
    const register = async (name, email, password) => {
        try {
            const response = await axios.post('https://dukaapp-1.onrender.com/register', { name, email, password });
            if (response.status === 201) {
                toast.success('Registration successful');
                // Optionally login the user automatically
                login(email, password);
            } else {
                throw new Error('Failed to register');
            }
        } catch (error) {
            const message = error.response?.data?.message || 'Error during registration';
            toast.error(message);
        }
    };

    // Login
    const login = async (email, password) => {
        try {
            const response = await axios.post('https://dukaapp-1.onrender.com/login', { email, password });
            if (response.status === 200) {
                setUser(response.data);
                toast.success('Login successful');
            } else {
                throw new Error('Invalid credentials');
            }
        } catch (error) {
            const message = error.response?.data?.message || 'Wrong email or password';
            toast.error(message);
        }
    };

    // Logout
    const logout = async () => {
        try {
            await axios.delete('https://dukaapp-1.onrender.com/logout');
            setUser(null);
            toast.success('Logout successful');
        } catch (error) {
            toast.error('Error during logout');
        }
    };

    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
