"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Toast from "@/components/Toast";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const message = searchParams.get("message");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [resetSent, setResetSent] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  
  {message === "confirm" && (
    <Toast message="✅ Check your inbox to confirm your email before logging in." />
  )}
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError) {
      setError(loginError.message);
      setLoading(false);
      return;
    }

    const user = data.user;
    if (!user) {
      setError("Login failed. Please check your credentials.");
      setLoading(false);
      return;
    }

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("id")
      .eq("id", user.id)
      .maybeSingle();

    if (profileError) {
      setError("Error checking profile.");
      setLoading(false);
      return;
    }

    if (!profile) {
      router.push("/onboarding");
    } else {
      router.push("/dashboard");
    }

    setLoading(false);
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResetSent(false);

    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${location.origin}/reset-password`,
    });

    if (resetError) {
      setError(resetError.message);
    } else {
      setResetSent(true);
    }
  };

  return (
    <form
      onSubmit={showForgot ? handleResetPassword : handleLogin}
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
        <h2 className="text-2xl font-bold text-[#212121] mb-2">
          {showForgot ? "Reset your password" : "Log in to SessionFlow"}
        </h2>
        <p className="text-gray-600 text-center mb-6">
          {showForgot
            ? "Enter your email and we'll send you a reset link."
            : "Welcome back! Log in to manage your sessions."}
        </p>
      </div>
        {message === "confirm" && (
  <p className="text-sm text-green-600 text-center mb-2">
    ✅ We’ve sent a confirmation email. Please verify it before logging in.
  </p>
)}
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E53935] transition"
        required
      />

      {!showForgot && (
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E53935] transition"
          required
        />
      )}

      <div className="flex justify-between items-center text-sm">
        {!showForgot ? (
          <>
            <span
              onClick={() => setShowForgot(true)}
              className="text-[#E53935] hover:underline cursor-pointer"
            >
              Forgot password?
            </span>
          </>
        ) : (
          <span
            onClick={() => {
              setShowForgot(false);
              setResetSent(false);
              setError("");
            }}
            className="text-[#E53935] hover:underline cursor-pointer"
          >
            Back to Login
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 rounded bg-[#E53935] text-white font-semibold transition ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading
          ? showForgot
            ? "Sending..."
            : "Logging in..."
          : showForgot
          ? "Send Reset Link"
          : "Log In"}
      </button>

      {error && <p className="text-sm text-red-500 text-center">{error}</p>}
      {resetSent && (
        <p className="text-sm text-green-600 text-center">
          Password reset link sent! Check your inbox.
        </p>
      )}
    </form>
  );
}
