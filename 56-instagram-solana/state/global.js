import { createContext, useCallback, useEffect, useState } from 'react';
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react';

import {
	getProgram,
	getPostAccountPk,
	getLikeAccountPk,
	getUserAccountPk,
} from '../utils';

import { LAMPORTS_PER_SOL } from '@solana/web3.js';

import toast from 'react-hot-toast';

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
	const [program, setProgram] = useState();
	const [isConnected, setIsConnected] = useState();
	const [userAccount, setUserAccount] = useState();
	const [posts, setPosts] = useState();

	const { connection } = useConnection();
	const wallet = useAnchorWallet();

	useEffect(() => {
		if (connection) {
			setProgram(getProgram(connection, wallet ?? {}));
		} else {
			setProgram(null);
		}
	}, [connection, wallet]);

	// Check wallet connection
	useEffect(() => {
		setIsConnected(!!wallet?.publicKey);
	}, [wallet]);

	// Check for a user account by fetching the user
	const fetchUserAccount = useCallback(async () => {
		if (!program) return;

		try {
			const userAccountPk = await getUserAccountPk(wallet?.publicKey);
			const userAccount = await program.account.user.fetch(userAccountPk);
			console.log('user found!');
			setUserAccount(userAccount);
		} catch (e) {
			setUserAccount(null);
			console.log('no user found!', e);
		}
	});

	// Check for user account
	useEffect(() => {
		fetchUserAccount();
	}, [isConnected]);

	const fetchPosts = useCallback(async () => {
		if (!program) return;

		const posts = await program.account.post.all();
		setPosts(posts.map((post) => post.account));
	}, [program]);

	useEffect(() => {
		if (!posts) {
			fetchPosts();
		}
	}, [posts, fetchPosts]);

	// Program events
	useEffect(() => {
		if (!program) return;

		// New Post event
		const newPostEventListener = program.addEventListener(
			'NewPostEvent',
			async (postEvent) => {
				try {
					const postAccountPk = await getPostAccountPk(
						postEvent.owner,
						postEvent.id
					);
					const newPost = await program.account.post.fetch(postAccountPk);
					setPosts((pots) => [newPost, ...posts]);
				} catch (error) {
					console.log("Couldn't fetch new post account", postEvent, e);
				}
			}
		);

		// Update Post Event
		const updatePostEventListener = program.addEventListener(
			'updatePostEvent',
			async (updateEvent) => {
				try {
					const postAccountPk = await getPostAccountPk(
						updateEvent.owner,
						updateEvent.id
					);
					const updatedPost = await program.account.post.fetch(postAccountPk);
					setPosts((posts) => {
						posts.map((post) => {
							if (
								post.owner.equals(updatedPost.owner) &&
								post.id.eq(updatedPost.id)
							) {
								return updatedPost;
							}
							return post;
						});
					});
				} catch (e) {
					console.log("Couldn't fetch updated post account", updateEvent, e);
				}
			}
		);

		// Delete Post Event
		const deletePostEventListener = program.addEventListener(
			'deletePostEvent',
			(deleteEvent) => {
				setPosts((posts) => {
					posts.filter(
						(post) =>
							!(post.owner,
							equals(deleteEvent.owner) && post.id.eq(deleteEvent.id))
					);
				});
			}
		);

    // Like /Dislike Post Event
    const likeDislikePostEventListener = program.addEventListener(
      "LikeDislikePostEvent",
      (likeDislikeEvent) => {
        setPosts((posts) =>
            posts.map((post) => {
              if (
                post.owner.equals(likeDislikeEvent.owner) &&
                post.id.eq(likeDislikeEvent.id)
              ) {
                return { ...posts, likes: likeDislikeEvent.likes }
              }
              return post;
            })
          )
      }
    )

		return () => {
			program.removeEventListener(newPostEventListener);
			program.removeEventListener(updatePostEventListener);
			program.removeEventListener(deletePostEventListener);
			program.removeEventListener(likeDislikePostEventListener);
		};
	}, [program]);

	// Create user
	const createUser = useCallback(async () => {
		if (!program) return;

		try {
			const txHash = await program.methods
				.createUser()
				.accounts({
					user: await getUserAccountPk(wallet.publicKey),
					owner: wallet.publicKey,
				})
				.rpc();
			await connection.confirmTransaction(txHash);
			toast.success('Created user!');
			await fetchUserAccount();
		} catch (e) {
			console.log("Could't create user", e.message);
			toast.error('Creating user failed!');
		}
	});

	const createPost = useCallback(async (title, image) => {
		if (!userAccount) return;
		try {
			const postId = userAccount.lastPostId.add(1);
			const txHash = await program.methods
				.createPost(title, image, postId)
				.account({
					post: await getPostAccountPk(wallet.publicKey, postId.toNumber()),
					user: await getLikeAccountPk(wallet.publicKey),
					owner: wallet.publicKey,
				})
				.rpc();
			await connection.confirmTransaction(txHash);
			toast.success('Post created!');

			// Update user account
			await fetchUserAccount();
		} catch (error) {
			toast.error('Creating post failed!!');
			console.log(error.message);
		}
	}, [program]);

  const updatePost = useCallback(
    async(owner, id, title) => {
      if(!userAccount) return;
      try {
        const txHash = await program.methods.updatePost(title).accounts({
          post: await getPostAccountPk(owner, id),
          owner,
        }).rpc();
        toast.success("Caption updated!");
      } catch (e) {
        toast.error("Failed to update post!");
        console.log(e.message);
      }
    }, [userAccount]
  )

	const deletePost = useCallback(async (owner, id) => {
		if (!userAccount) return;
		try {
			const txHash = await program.methods
				.deletePost()
				.accounts({
					post: await getPostAccountPk(owner, id),
					owner,
				})
				.rpc();
			toast.success('Post deleted successfully!');
		} catch (e) {
      toast.error("Failed to delete!");
      console.log(e.message)
    }
	}, [userAccount]);

  const likePost = useCallback(
    async (owner, id, liker) => {
      if (!userAccount) return;

      try {
        const txHash = await program.methods.likePosts().accounts({
          like: await getLikeAccountPk(owner, id, liker),
          post: await getPostAccountPk(owner, id),
          user: await getUserAccountPk(wallet?.publicKey),
          owner: wallet?.publicKey,
        }).rpc();
        toast.success("You liked a post!");
      } catch (e) {
        toast.error("Failed to like post!!")
        console.log(e.message);
      }
    }, [userAccount]
  )

  const dislikePost = useCallback(
    async (owner, id, disliker) => {
      if (!userAccount) return;

      try {
        const txHash = await program.methods.dislikePost().accounts({
          like: await getLikeAccountPk(owner, id, disliker),
          post: await getPostAccountPk(owner, id),
          owner: wallet.publicKey,
        }).rpc()
        toast.success("You unliked a post!");ß
      } catch (e) {
        toast.error("Failed to unlike post!");
        console.log(e.message);
      }
    }, [userAccount]
  )

	return (
		<GlobalContext.Provider
			value={{
				isConnected,
        wallet,
				hasUserAccount: userAccount ? true : false,
				posts,
				createUser,
				createPost,
        updatePost,
				deletePost,
        likePost,
        dislikePost,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
