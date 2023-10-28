"use client"
import {useContext, useState, ReactNode, createContext, useEffect} from 'react';
import {
    onAuthStateChanged,
    User,
} from 'firebase/auth';
import {auth} from "@/app/lib/firebase";
import {Loader} from "@/app/components/Loader";

type AuthContextType = {
    user: User | null;
};
export const AuthContext = createContext<AuthContextType>({user: null});
export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({children}: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user ?? null)
            setLoading(false)
        })
        return () => unsubscribe();
    }, [])

    return <AuthContext.Provider value={{user}}>
        {loading ? <Loader/> : children}
    </AuthContext.Provider>
}