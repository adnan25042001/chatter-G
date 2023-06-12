import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebase";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const clear = () => {
        setCurrentUser(null);
        setIsLoading(false);
    };

    const authStateChanged = (user) => {
        setIsLoading(true);
        if (!user) {
            return;
        }
        console.log(user);
        setCurrentUser(user);
        setIsLoading(false);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, authStateChanged);
        return () => unsubscribe;
    }, []);

    return (
        <UserContext.Provider
            value={{ currentUser, setCurrentUser, isLoading, setIsLoading }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useAuth = () => useContext(UserContext);
