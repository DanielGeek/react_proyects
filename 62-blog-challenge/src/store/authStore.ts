import { create } from 'zustand';
import axios from 'axios';
import { API_USERS } from '../config/env';

interface User {
    id: string;
    username: string;
    password: string;
    role: string;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    error: string | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    error: null,
    login: async (username, password) => {
        try {
            const { data } = await axios.get(`${API_USERS}`);
            const user = data.find((user: User) => user.username === username && user.password === password);

            if (user) {
                set({ user, isAuthenticated: true, error: null });
            } else {
                set({ isAuthenticated: false, error: 'Invalid username or password' });
            }
        } catch (error) {
            set({ isAuthenticated: false, error: 'Error fetching users' });
        }
    },
    logout: () => set({ isAuthenticated: false, user: null, error: null }),
}));

export default useAuthStore;
