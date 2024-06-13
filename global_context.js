import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { api } from './api/api';

// export type User = {
//     fullnames: string;
//     email: string;
//     id: number;
// }

// interface GlobalContextType {
//     isLoading: boolean;
//     setIsLoading: (isLoading: boolean) => void;
//     isLoggedIn: boolean;
//     setIsLoggedIn: (isLoggedIn: boolean) => void;
//     user: User | null;
//     setUser: (user: User | null) => void;
// }

// export type Props = {
//     children: ReactNode;
// };

export const GlobalContext = createContext();

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (context === undefined) {
        throw new Error('useGlobalContext must be used within a GlobalProvider');
    }
    return context;
};

export const GlobalProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            setIsLoading(true);
            try {
                const response = await api.get('/user/profile');
                if (response.data.id) {
                    setIsLoggedIn(true);
                    setUser({
                        fullnames: response.data.fullnames,
                        email: response.data.email,
                        id: response.data.id
                    });
                } else {
                    setIsLoggedIn(false);
                    setUser(null);
                }
            } catch (error) {
                setIsLoggedIn(false);
                setUser(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    return (
        <GlobalContext.Provider value={{ isLoading, setIsLoading, isLoggedIn, setIsLoggedIn, user, setUser }}>{children}</GlobalContext.Provider>
        

    );
};
