import { create } from "zustand";

interface SignupState {
  role: string | null;
  setRole: (role: string) => void;
  reset: () => void;
}

export const useSignupStore = create<SignupState>((set) => ({
  role: null,
  setRole: (role) => set({ role }),
  reset: () => set({ role: null }),
}));
