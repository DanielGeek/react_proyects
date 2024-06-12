import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery, QueryKey } from '@tanstack/react-query';
import axios from 'axios';
import useAuthStore from '../store/authStore';
import './BlogPost.scss';
import { API_POSTS } from '../config/env';

interface Post {
    id: string;
    title: string;
    content: string;
}

const fetchPost = async (id: string): Promise<Post> => {
    const { data } = await axios.get(`${API_POSTS}/${id}`);
    return data;
};

const BlogPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const postQueryKey: QueryKey = ['post', id];
    const { user } = useAuthStore();

    const { data, error, isLoading } = useQuery<Post, Error>({
        queryKey: postQueryKey,
        queryFn: () => fetchPost(id!),
        enabled: !!id,
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading post</p>;

    return (
        <div className="container blog-post">
            <h1 className="blog-post__title">{data?.title}</h1>
            <p className="blog-post__content">{data?.content}</p>
            {user?.role === 'admin' && (
                <div className="buttons">
                    <Link to={`/edit/${data?.id}`} className="button button--edit">
                        Edit
                    </Link>
                    <button className="button button--delete" onClick={() => {/* logic to delete post */ }}>
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
};

export default BlogPost;
