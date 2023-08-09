import React from "react";
import PopupWrapper from "./PopupWrapper";
import { RiErrorWarningLine } from "react-icons/ri";
import { DELETED_FOR_EVERYONE, DELETED_FOR_ME } from "@/utils/constants";

const DeleteMessagePopup = (props) => {
    return (
        <PopupWrapper {...props}>
            <div className="mt-10 mb-5">
                <div className="flex items-center justify-center gap-3">
                    <RiErrorWarningLine size={24} className="text-red-500" />
                    <div className="text-lg">
                        Are you sure, you want to delete message?
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2 mt-10">
                    <button
                        className="border-[2px] border-red-700 py-2 px-4 text-sm rounded-md text-red-500 hover:bg-red-700 hover:text-white transition-all"
                        onClick={() => props.deleteMessage(DELETED_FOR_ME)}
                    >
                        Delete for me
                    </button>
                    {props.self && (
                        <button
                            className="border-[2px] border-red-700 py-2 px-4 text-sm rounded-md text-red-500 hover:bg-red-700 hover:text-white transition-all"
                            onClick={() =>
                                props.deleteMessage(DELETED_FOR_EVERYONE)
                            }
                        >
                            Delete for everyone
                        </button>
                    )}
                    <button
                        className="border-[2px] border-white py-2 px-4 text-sm rounded-md text-white hover:bg-white hover:text-black transition-all"
                        onClick={props.onHide}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </PopupWrapper>
    );
};

export default DeleteMessagePopup;
