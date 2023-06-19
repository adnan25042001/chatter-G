import { useChatContext } from "@/context/chatContext";
import { db } from "@/firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect } from "react";

const Chats = () => {
    const { users, setUsers } = useChatContext();

    useEffect(() => {
        onSnapshot(collection(db, "users"), (snap) => {
            const updatedUser = {};
            snap.forEach((doc) => {
                updatedUser[doc.id] = doc.data();
            });
            setUsers(updatedUser);
        });
    }, []);

    return <div>Chats</div>;
};

export default Chats;
