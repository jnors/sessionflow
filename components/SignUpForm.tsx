"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { supabase } from "../lib/supabaseClient";

export default function SignUpForm() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const [isPasswordWeak, setIsPasswordWeak] = useState(false);

    const isStrongPassword = (pw: string) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return regex.test(pw);
    };

    useEffect(() => {
        setIsPasswordWeak(password.length > 0 && !isStrongPassword(password));
    }, [password]);

    useEffect(() => {
        if (confirmPassword.length > 0) {
            setPasswordMismatch(password !== confirmPassword);
        }
    }, [password, confirmPassword]);

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        if (password !== confirmPassword) {
            setPasswordMismatch(true);
            setError("Passwords do not match.");
            return;
        }

        if (!isStrongPassword(password)) {
            setIsPasswordWeak(true);
            setError(
                "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
            );
            return;
        }

        const { data, error: signUpError } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: "https://sessionflow.vercel.app/login",
            },
        });

        if (signUpError) {
            setError(signUpError.message);
            return;
        }

        setSuccess(true);
        router.push("/login?message=confirm");
    };

    return (
        <form
            onSubmit={handleSignUp}
            className="max-w-md mx-auto p-8 space-y-6 border border-gray-100 rounded-2xl shadow-lg bg-white"
        >
            <div className="flex flex-col items-center">
                <Image
                    src="/images/logo.png"
                    alt="SessionFlow Logo"
                    width={140}
                    height={32}
                    className="mb-4"
                />
                <h2 className="text-2xl font-bold text-[#212121] mb-2">Sign Up</h2>
                <p className="text-gray-600 text-center mb-6">
                    Welcome aboard! Please fill in your details to create an account.
                </p>
            </div>

            <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E53935] transition"
                required
            />

            <div className="relative">
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full p-3 border rounded-lg focus:outline-none transition ${isPasswordWeak
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-[#E53935]"
                        }`}
                    required
                />
                {isPasswordWeak && (
                    <p className="text-sm text-red-500 mt-1">
                        Password must be at least 8 characters and include uppercase, lowercase, number, and special character.
                    </p>
                )}
            </div>

            <div className="relative">
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`w-full p-3 border rounded-lg focus:outline-none transition ${passwordMismatch
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-[#E53935]"
                        }`}
                    required
                />
                {passwordMismatch && (
                    <p className="text-sm text-red-500 mt-1">Passwords do not match</p>
                )}
            </div>

            <button
                type="submit"
                className="w-full bg-[#E53935] hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition"
            >
                Sign Up
            </button>

            {error && <p className="text-center text-sm text-red-500">{error}</p>}
            {success && (
                <p className="text-center text-sm text-green-600">
                    Check your inbox to confirm your email.
                </p>
            )}
        </form>
    );
}
