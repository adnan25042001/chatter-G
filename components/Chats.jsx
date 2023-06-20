import { useChatContext } from "@/context/chatContext";
import { db } from "@/firebase/firebase";
import { collection, doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import Avatar from "./Avatar";
import { useAuth } from "@/context/authContext";

const Chats = () => {
    const { users, setUsers, chats, setChats, selectedChat, setSelectedChat } =
        useChatContext();
    const [search, setSearch] = useState("");
    const { currentUser } = useAuth();

    useEffect(() => {
        onSnapshot(collection(db, "users"), (snap) => {
            const updatedUser = {};
            snap.forEach((doc) => {
                updatedUser[doc.id] = doc.data();
            });
            setUsers(updatedUser);
        });
    }, []);

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(
                doc(db, "userChats", currentUser.uid),
                (doc) => {
                    if (doc.exists()) {
                        const data = doc.data();
                        setChats(data);
                    }
                }
            );
        };
        currentUser?.uid && getChats();
    }, []);

    const filteredChats = Object.entries(chats || {}).sort(
        (a, b) => b[1].date - a[1].date
    );
    
    return (
        <div className="flex flex-col h-full">
            <div className="shrink-0 sticky -top-[20px] z-10 flex justify-center w-full bg-c2 py-5">
                <RiSearch2Line className="absolute top-9 left-12 text-c3" />
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search username..."
                    className="w-[300px] h-12 rounded-xl bg-c1/[0.5] pl-11 pr-5 placeholder:text-c3 outline-none text-base"
                />
            </div>

            <ul className="flex flex-col w-full my-5 gap-[2px]">
                <li
                    className={`h-[90px] flex items-center gap-4 rounded-3xl hover:bg-c1 p-4 cursor-pointer bg-c1`}
                >
                    <Avatar size="x-large" user={currentUser} />
                    <div className="flex flex-col gap-1 grow relative">
                        <span className="text-base text-white flex items-center justify-between">
                            <div className="font-medium">displayName</div>
                            <div className="text-c3 text-xs">Date</div>
                        </span>
                        <p className="text-sm text-c3 line break-all">
                            Last message
                        </p>

                        <span className="absolute right-0 top-7 min-w-[20px] h-5 rounded-full bg-red-500 flex justify-center items-center text-sm">
                            5
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Chats;
