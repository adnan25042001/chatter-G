import { useChatContext } from "@/context/chatContext";
import React, { useState } from "react";

const ChatHeader = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { users, data } = useChatContext();

    const online = users[data?.user?.uid]?.isOnline;

    const user = users[data?.user?.uid];

    return (
        <div className="flex justify-between items-center pb-5 border-b border-white/[0.05]">
            ChatHeader
        </div>
    );
};

export default ChatHeader;
