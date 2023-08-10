import React from "react";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { useChatContext } from "@/context/chatContext";
import ChatFooter from "./ChatFooter";
import { useAuth } from "@/context/authContext";

const Chat = () => {
    const { currentUser } = useAuth();
    const { data, users } = useChatContext();

    const isUserBlocked = users[currentUser.uid]?.blockedUsers?.find(
        (u) => u === data.user.uid
    );

    const iAmBlocked = users[data.user.uid]?.blockedUsers?.find(
        (u) => u === currentUser.uid
    );

    return (
        <div className="flex flex-col p-5 grow">
            <ChatHeader />
            {data?.chatId && <Messages />}
            {!iAmBlocked && !isUserBlocked && <ChatFooter />}
            {isUserBlocked && (
                <div className="w-full text-center text-c3 py-4">
                    This user has been blocked
                </div>
            )}
            {iAmBlocked && (
                <div className="w-full text-center text-c3 py-4">
                    {`${data?.user?.displayName} has blocked you`}
                </div>
            )}
        </div>
    );
};

export default Chat;
