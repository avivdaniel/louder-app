"use client"
import React, {ReactNode} from 'react';
import {AuthContextProvider} from "@/app/context/AuthContext";

export const Providers = ({children}: {children: ReactNode}) => {
    return (
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
    );
};