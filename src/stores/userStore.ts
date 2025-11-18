import { create } from "zustand";
import { persist } from "zustand/middleware";

// ✅ Define user type
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

// ✅ Define store shape
interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
  isAuthenticated: boolean;
}

// ✅ Zustand store with persistence
export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      setUser: (user) => set({ user, isAuthenticated: true }),
      clearUser: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: "user-storage", // key in localStorage
    }
  )
);
