import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect } from "react";
const AuthContext = createContext(undefined);
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // Check for existing session on mount
    useEffect(() => {
        const savedUser = localStorage.getItem("equip-academy-user");
        if (savedUser) {
            try {
                const userData = JSON.parse(savedUser);
                setUser(userData);
                setIsAuthenticated(true);
            }
            catch (error) {
                localStorage.removeItem("equip-academy-user");
            }
        }
    }, []);
    const login = (role, userData) => {
        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem("equip-academy-user", JSON.stringify(userData));
    };
    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem("equip-academy-user");
    };
    return _jsx(AuthContext.Provider, Object.assign({ value: { user, login, logout, isAuthenticated } }, { children: children }));
}
export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
