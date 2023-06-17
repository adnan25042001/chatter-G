import { createContext, useContext, useState } from "react";

const chatContext = createContext();

export const chatContextProvider = ({ children }) => {
    const [users, setUsers] = useState(false);

    return (
        <chatContext.Provider
            value={{ 
                users, 
                setUsers 
            }}
        >
            {children}
        </chatContext.Provider>
    );
};

export const useChatContext = () => useContext(chatContext);
