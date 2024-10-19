import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Check session and load user from localStorage on mount
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    // Update localStorage whenever user changes
    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    // Register user
    const register = async (name, email, password) => {
        try {
            const response = await axios.post('https://dukaapp-3.onrender.com/register', { name, email, password });
            if (response.status === 201) {
                toast.success('Registration successful');
                login(email, password); // Auto-login after successful registration
            }
        } catch (error) {
            toast.error('Error during registration');
        }
    };

    // Login user
    const login = async (email, password) => {
        try {
            const response = await axios.post('https://dukaapp-3.onrender.com/login', { email, password });
            setUser(response.data);
            toast.success('Login successful');
        } catch (error) {
            toast.error('Wrong email or password');
        }
    };

    // Logout user
    const logout = async () => {
        try {
            await axios.delete('https://dukaapp-3.onrender.com/logout');
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
