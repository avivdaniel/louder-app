"use client"
import React, {useEffect} from 'react';
import {useAuthContext} from "@/app/context/AuthContext";
import {useRouter} from "next/navigation";

const Page = () => {
    const {user} = useAuthContext();
    const router = useRouter()

    useEffect(() => {
        if (!user) router.push("/")
    }, [user]);

    return (<h1>Only logged in users can view this page</h1>);
};

export default Page;