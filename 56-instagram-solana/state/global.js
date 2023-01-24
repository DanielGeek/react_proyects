import { createContext, useCallback, useEffect, useState } from "react";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";

import { getProgram, getPostAccountPk, getLikeAccountPk, getUserAccountPk } from "../utils";

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
    const [isConnected, setIsConnected] = useState()
    const [userAccount, setUserAccount] = useState()
    const [posts, setPosts] = useState([])

    const { connection } = useConnection()
    const wallet = useAnchorWallet()

    useEffect(() => {
      if(connection) {
        setProgram(getProgram(connection, wallet ?? {}))
      } else {
        setProgram(null)
      }
    }, [connection, wallet])

    // Check wallet connection
    useEffect(() => {
      setIsConnected(!!wallet?.publicKey);
    }, [wallet])

    // Check for a user account by fetching the user
    const fetchUserAccount = useCallback(async () => {
      if(!program) return;

      try {
        const userAccountPk = await getUserAccountPk(wallet?.publicKey)
        const userAccount = await program.account.user.fetch(userAccountPk)
        console.log("user found!")
        setUserAccount(userAccount)
      } catch (e) {
        setUserAccount(null);
        console.log("no user found!", e)
      }
    })

    // Check for user account
    useEffect(() => {
      fetchUserAccount();
    }, [isConnected])

    // Program eventos
    useEffect(() => {
      if(!program) return;

      // New Post event
      const newPostEventListener = program.addEventListener(
        "NewPostEvent",
        async(postEvent) => {
          try {
            const postAccountPk = await getPostAccountPk(
              postEvent.owner,
              postEvent.id,
            );
            const newPost = await program.account.post.fetch(postAccountPk)
            setPosts((pots) => [newPost, ...posts])
          } catch (error) {
            console.log("Couldn't fetch new post account", postEvent, e);
          }
        }
      )

      return () => {
        program.removeEventListener(newPostEventListener);
      }
    }, [program])
    

    // Create user
    const createUser = useCallback(async () => {
      if(!program) return;

      try {
        const txHash = await program.methods.createUser().accounts({
          user: await getUserAccountPk(wallet.publicKey),
          owner: wallet.publicKey,
        })
        .rpc()
        await connection.confirmTransaction(txHash)
        toast.success("Created user!")
        await fetchUserAccount()
      } catch (e) {
        console.log("Could't create user", e.message)
        toast.error("Creating user failed!")
      }
    })

    const createPost = useCallback(
      async (title, image) => {
        if(!userAccount) return;
        try {
          const postId = userAccount.lastPostId.add(1);
          const txHash = await program.methods.createPost(title, image, postId)
            .account({
              post: await getPostAccountPk(wallet.publicKey, postId.toNumber()),
              user: await getLikeAccountPk(wallet.publicKey),
              owner: wallet.publicKey,
            }).rpc()
          await connection.confirmTransaction(txHash)
          toast.success("Post created!")

          // Update user account
          await fetchUserAccount();
        } catch (error) {
          toast.error("Creating post failed!!")
          console.log(error.message)
        }
      }
    )

    return (
        <GlobalContext.Provider
            value={{
                isConnected,
                hasUserAccount: userAccount ? true : false,
                createUser,
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}