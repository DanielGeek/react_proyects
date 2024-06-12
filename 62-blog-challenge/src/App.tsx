import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import BlogForm from './components/BlogForm';
import Login from './components/Login';
import useAuthStore from './store/authStore';
import usePostStore from './store/postStore';
import './styles/main.scss';

const PrivateRoute: React.FC<{ element: React.FC }> = ({ element: Element }) => {
    const { isAuthenticated } = useAuthStore();
    return isAuthenticated ? <Element /> : <Navigate to="/login" />;
};

const App: React.FC = () => {
    const { fetchPosts } = usePostStore();

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/new" element={<PrivateRoute element={BlogForm} />} />
            <Route path="/edit/:id" element={<PrivateRoute element={BlogForm} />} />
            <Route path="/post/:id" element={<BlogPost />} />
            <Route path="/" element={<BlogList />} />
        </Routes>
    );
};

export default App;