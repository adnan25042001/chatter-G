import { useAuth } from "@/context/authContext";
import { useChatContext } from "@/context/chatContext";
import { db } from "@/firebase/firebase";
import {
    Timestamp,
    arrayUnion,
    doc,
    serverTimestamp,
    updateDoc,
} from "firebase/firestore";
import React from "react";
import { TbSend } from "react-icons/tb";
import { v4 as uuid } from "uuid";

const Composebar = () => {
    const { inputText, setInputText, data } = useChatContext();
    const { currentUser } = useAuth();

    const handleTyping = (e) => {
        setInputText(e.target.value);
    };

    const onKeyUp = (e) => {
        if (e.key === "Enter" && inputText.trim().length > 0) {
            handleSend();
        }
    };

    const handleSend = async () => {
        await updateDoc(doc(db, "chats", data.chatId), {
            messages: arrayUnion({
                id: uuid(),
                text: inputText,
                sender: currentUser.uid,
                date: Timestamp.now(),
                read: false,
            }),
        });

        let msg = { text: inputText };

        await updateDoc(doc(db, "userChats", currentUser.uid), {
            [data.chatId + ".lastMessage"]: msg,
            [data.chatId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", data.user.uid), {
            [data.chatId + ".lastMessage"]: msg,
            [data.chatId + ".date"]: serverTimestamp(),
        });

        setInputText("");
    };

    return (
        <div className="flex items-center gap-2 grow">
            <input
                type="text"
                className="grow w-full outline-0 px-2 py-2 text-white bg-transparent placeholder:text-c3 outline-none"
                placeholder="Type a message"
                value={inputText}
                onChange={handleTyping}
                onKeyUp={onKeyUp}
            />
            <button
                className={`h-10 w-10 rounded-xl shrink-0 flex justify-center items-center ${
                    inputText.trim().length > 0 ? "bg-c4" : ""
                }`}
                onClick={handleSend}
            >
                <TbSend size={20} className="text-white" />
            </button>
        </div>
    );
};

export default Composebar;
