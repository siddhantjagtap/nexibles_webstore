'use client'
import { createContext, useContext, useState, useEffect } from "react";
import jwt from 'jsonwebtoken';
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";

const AuthContext = createContext();
export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) =>
{
    const [user, setUser] = useState(null);
    const navigation = useRouter();

    const authenticatedUser = (token) => {
        try {
            const decodedToken = jwt.decode(token);
            if (decodedToken.exp * 1000 > Date.now()) {
                setUser(decodedToken);
            } else {
                toast.error('Session Expired');
                localStorage.removeItem('token');
            }
        } catch (error) {
            console.error('Error decoding token', error);
            localStorage.removeItem('token');
        }
    };

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            authenticatedUser(storedToken);
        }
    }, []);

    useEffect(() => {
        console.log('user', user);
    })


    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
        navigation.push('/login');
    };

    const contextValue = {
        user,
        login,
        logout,
    };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
};

