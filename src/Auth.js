import { createContext, useContext } from 'react';

export const AuthContext = createContext();

export function useAuth() {
    console.log(AuthContext, "auth")
    return useContext(AuthContext);
}