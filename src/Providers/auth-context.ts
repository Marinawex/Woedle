import {createContext} from "react";

export interface user {
    email: string;
    name: string;
  }

interface AuthContextType {
    currentUser: user | null;
    setCurrentUser: (user: user | null) => void;
}

export const AuthContext = createContext<AuthContextType>({
    currentUser: null,
    setCurrentUser: () => {}
});