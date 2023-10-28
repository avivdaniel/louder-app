"use client"
import Image from 'next/image'
import Link from "next/link";
import {useAuthContext} from "@/app/context/AuthContext";

export default function Home() {
    const {user} = useAuthContext();
    return (
        <main className="h-screen flex items-center justify-center bg-black text-white">
            <div className="max-w-md w-full p-8 bg-white text-black rounded-lg shadow-lg">
                <div className="text-center mb-8">
                    <Image
                        src="/your-image.png" // Replace with the path to your image
                        alt="App Logo"
                        width={100}
                        height={100}
                    />
                    <h1 className="text-3xl font-extrabold mt-4">Hello, welcome to Louder</h1>
                </div>
                <div className="flex justify-center">
                    <Link href={user ? "/admin" : "/login"}>
                      <span
                          className="px-6 py-3 bg-black text-white rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300 transform hover:scale-105">
                          {user ? "To Admin" : " To Login"}
                      </span>
                    </Link>
                </div>
            </div>
        </main>
    )
}
