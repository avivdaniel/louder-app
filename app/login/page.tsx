'use client'
import React from "react";
import {login} from "../lib/firebase/auth/login";
import {useRouter} from 'next/navigation'

function Login() {
    const router = useRouter();
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('');

    const handleForm = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')
        const {result, error} = await login(email, password);
        if (error) {
            setError('Something went wrong')
            return console.log(error)
        }
        console.log(result)
        return router.push("/admin")
    }
    return <div className="w-full h-screen flex items-center justify-center bg-black text-white">
        <div className="max-w-md w-full p-8 bg-white text-black rounded-lg shadow-lg">
            <h1 className="text-4xl font-extrabold text-center mb-8 text-black">Login</h1>
            <form onSubmit={handleForm} className="space-y-4">
                {error && <div className="text-red-500 text-center">{error}</div>}
                <label className="block mb-4">
                    <span className="text-gray-600 mb-2">Email</span>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        placeholder="example@mail.com"
                    />
                </label>
                <label>
                    <span className="text-gray-600 mb-2">Password</span>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        placeholder="password"
                    />
                </label>
                <div className="text-center">
                    <button type="submit"
                            className="px-6 py-3 bg-black text-white rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300 transform hover:scale-105">
                        Login
                    </button>
                </div>
            </form>
            <div className="text-center">
                <button onClick={() => router.push('/')}
                        className="mt-4 text-sm text-black hover:underline focus:outline-none">
                    Back to Home
                </button>
            </div>
        </div>
    </div>
};

export default Login;