import React, { useEffect } from "react";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/router";

const Home = () => {
    const router = useRouter();
    const { signOut, currentUser, isLoading } = useAuth();

    useEffect(() => {
        if(!isLoading && !currentUser){
            router.push("/login")
        }
    }, [currentUser, isLoading])

    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-1/2 h-14 rounded-md cursor-pointer p-[3px] ml-5 mt-5">
            <button
                className="flex items-center justify-center text-white font-semibold bg-c1 w-full h-full rounded-md"
                onClick={signOut}
            >
                Sign out
            </button>
        </div>
    );
};

export default Home;
