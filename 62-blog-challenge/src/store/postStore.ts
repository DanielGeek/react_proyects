import { create } from 'zustand';
import axios from 'axios';
import { API_POSTS } from '../config/env';

interface Post {
    id: string;
    title: string;
    content: string;
    userId: string;
}

interface PostState {
    posts: Post[];
    fetchPosts: () => Promise<void>;
    addPost: (post: Omit<Post, 'id'>) => Promise<void>;
    updatePost: (id: string, post: Omit<Post, 'id'>) => Promise<void>;
    deletePost: (id: string) => Promise<void>;
    highestId: number;
}

const usePostStore = create<PostState>((set, get) => ({
    posts: [],
    highestId: 0,
    fetchPosts: async () => {
        const { data } = await axios.get(`${API_POSTS}`);
        const highestId = data.reduce((maxId: number, post: Post) => Math.max(maxId, parseInt(post.id)), 0);
        set({ posts: data, highestId });
    },
    addPost: async (post) => {
        const highestId = (get().highestId + 1).toString();
        const newPost = { ...post, id: highestId };
        const { data } = await axios.post(`${API_POSTS}`, newPost);
        set((state) => ({ posts: [...state.posts, data], highestId: parseInt(highestId) }));
    },
    updatePost: async (id, post) => {
        try {
            const { data } = await axios.put(`${API_POSTS}/${id}`, post);
            set((state) => ({
                posts: state.posts.map((p) => (p.id === id ? data : p)),
            }));
        } catch (error) {
            console.error(`Failed to update post with id ${id}`, error);
        }
    },
    deletePost: async (id) => {
        try {
            await axios.delete(`${API_POSTS}/${id}`);
            set((state) => ({
                posts: state.posts.filter((post) => post.id !== id),
            }));
        } catch (error) {
            console.error(`Failed to delete post with id ${id}`, error);
        }
    },
}));

export default usePostStore;
