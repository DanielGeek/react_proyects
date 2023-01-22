import { createContext, useCallback, useEffect, useState } from "react";
import { getProgram } from "../utils/program";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import toast from "react-hot-toast";

export const GlobalContext = createContext({
    isConnected: null,
    wallet: null,
    hasUserAccount: null,
    posts: null,
    fetchPosts: null,
    createUser: null,
    createPost: null,
    updatePost: null,
    deletePost: null,
    likePost: null,
    dislikePost: null,
});

export const GlobalState = ({ children }) => {
    const [program, setProgram] = useState()

    const { connection } = useConnection()
    const wallet = useAnchorWallet()

    useEffect(() => {
      if(connection) {
        setProgram(getProgram(connection, wallet ?? {}))
      } else {
        setProgram(null)
      }
    }, [connection, wallet])
    

    return (
        <GlobalContext.Provider
            value={{
                program
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}