import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import usePostStore from '../store/postStore';
import useAuthStore from '../store/authStore';
import './BlogForm.scss';
import { useQueryClient } from '@tanstack/react-query';

const BlogForm: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { addPost, updatePost, posts } = usePostStore();
    const { user } = useAuthStore();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');
    const queryClient = useQueryClient();

    useEffect(() => {
        if (id) {
            const post = posts.find((p) => p.id === id);
            if (post) {
                setTitle(post.title);
                setContent(post.content);
            }
        }
    }, [id, posts]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (title.length < 2 || content.length < 2) {
            setError('Both title and content must be at least 2 characters long.');
            return;
        }
        if (id) {
            const post = posts.find((p) => p.id === id);
            await updatePost(id, { title, content, userId: post?.userId! });
        } else {
            if (user?.id) {
                await addPost({ title, content, userId: user.id });
            } else {
                setError('User not logged in. Please log in to create a post.');
                return;
            }
        }
        queryClient.invalidateQueries({ queryKey: ['posts'] });
        navigate('/');
    };

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    {error && <p className="error">{error}</p>}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default BlogForm;
