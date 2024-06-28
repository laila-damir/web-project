import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Automatically set the user as an admin
        setUser({
            username: 'admin',
            roles: ['admin']
        });
        localStorage.setItem("access_token", 'dummy-admin-token');
    }, []);

    const login = (usernameAndPassword) => {
        setUser({
            username: 'admin',
            roles: ['admin']
        });
        localStorage.setItem("access_token", 'dummy-admin-token');
        return Promise.resolve({ status: 200, data: { message: 'Admin logged in' } });
    };

    const logOut = () => {
        localStorage.removeItem("access_token");
        setUser(null);
    };

    const isUserAuthenticated = () => {
        return true; // Always return true for authentication
    };

    const isAdmin = () => {
        return true; // Always return true for admin check
    };

    return (
        <AuthContext.Provider value={{
            user,
            login,
            logOut,
            isUserAuthenticated,
            isAdmin
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
