
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const checkSession = async () => {
        try {
            const response = await axios.get('/check_session');
            setUser(response.data);
        } catch (error) {
            setUser(null);
        }
    };

    useEffect(() => {
        checkSession();
    }, []);

    const register = async (name, email, password) => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/register', { name, email, password });
            setUser(response.data);
            toast.success('Registration successful');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Error during registration');
        }
    };

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/login', { email, password });
            setUser(response.data);
            toast.success('Login successful');
        } catch (error) {
            toast.error('Wrong email or password');
        }
    };

    const logout = async () => {
        await axios.delete('http://127.0.0.1:5000/logout');
        setUser(null);
        toast.success('Logout successful');
    };

    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
