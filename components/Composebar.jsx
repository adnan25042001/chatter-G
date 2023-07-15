import { useChatContext } from "@/context/chatContext";
import React from "react";
import { TbSend } from "react-icons/tb";

const Composebar = () => {
    const { inputText, setInputText } = useChatContext();

    const handleTyping = (e) => {
        setInputText(e.target.value);
    };

    const onKeyUp = () => {};

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
            <button>
                <TbSend size={20} className="text-white" />
            </button>
        </div>
    );
};

export default Composebar;
