import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import useAuthStore from '../store/authStore';
import usePostStore from '../store/postStore';
import './BlogList.scss';
import { API_POSTS, API_USERS } from '../config/env';

interface Post {
    id: string;
    title: string;
    content: string;
    userId: string;
}

interface User {
    id: string;
    username: string;
}

const fetchPosts = async (): Promise<Post[]> => {
    const { data } = await axios.get(`${API_POSTS}`);
    return data;
};

const fetchUsers = async (): Promise<User[]> => {
    const { data } = await axios.get(`${API_USERS}`);
    return data;
};

const BlogList: React.FC = () => {
    const queryClient = useQueryClient();
    const { data: posts, error: postsError, isLoading: postsLoading } = useQuery<Post[], Error>({
        queryKey: ['posts'],
        queryFn: fetchPosts,
    });
    const { data: users, error: usersError, isLoading: usersLoading } = useQuery<User[], Error>({
        queryKey: ['users'],
        queryFn: fetchUsers,
    });

    const { user } = useAuthStore();
    const { deletePost } = usePostStore();

    if (postsLoading || usersLoading) return <p>Loading...</p>;
    if (postsError) return <p>Error loading posts</p>;
    if (usersError) return <p>Error loading users</p>;

    const getUsername = (userId: string) => {
        const creator = users?.find((u) => u.id === userId);
        return creator ? creator.username : 'Unknown';
    };

    // Modificar lógica de filtrado para mostrar todos los posts si no hay usuario logueado
    const filteredPosts = user
        ? user.role === 'admin'
            ? posts
            : posts?.filter((post) => post.userId === user.id)
        : posts;

    const sortedPosts = filteredPosts ? [...filteredPosts].sort((a, b) => parseInt(b.id) - parseInt(a.id)) : [];

    const handleDelete = async (id: string) => {
        try {
            await deletePost(id);
            queryClient.invalidateQueries({ queryKey: ['posts'] });
        } catch (error) {
            console.error('Failed to delete post', error);
        }
    };

    return (
        <div className="container blog-list">
            <div className="blog-list__header">
                <h1>Blog Posts</h1>
                <Link to="/new" className="button button--new">
                    New Post
                </Link>
            </div>
            {sortedPosts.map((post) => (
                <div key={post.id} className="blog-list__item">
                    <h2 className="blog-list__title">{post.title}</h2>
                    <p className="blog-list__content">{post.content}</p>
                    <p className="blog-list__user">Creator: {getUsername(post.userId)}</p>
                    <Link to={`/post/${post.id}`} className="blog-list__link">
                        Read More
                    </Link>
                    {user?.role === 'admin' && (
                        <div className="buttons">
                            <Link to={`/edit/${post.id}`} className="button button--edit">
                                Edit
                            </Link>
                            <button className="button button--delete" onClick={() => handleDelete(post.id)}>
                                Delete
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default BlogList;
