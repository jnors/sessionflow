"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function OnboardingPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState<"student" | "trainer">("student");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data: sessionData } = await supabase.auth.getSession();
    const user = sessionData.session?.user;

    if (!user) {
      setError("User session not found.");
      setLoading(false);
      return;
    }

    const { error: insertError } = await supabase.from("profiles").insert({
      id: user.id,
      full_name: fullName,
      role,
    });

    if (insertError) {
      setError(insertError.message);
    } else {
      router.push("/dashboard"); // or home
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 space-y-4">
      <h2 className="text-2xl font-bold text-center">Welcome to SessionFlow 🎉</h2>
      <p className="text-center text-gray-600">Let’s finish setting up your account</p>

      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="w-full p-3 border rounded"
        required
      />

      <select
        value={role}
        onChange={(e) => setRole(e.target.value as "student" | "trainer")}
        className="w-full p-3 border rounded"
        required
      >
        <option value="student">I'm a Student</option>
        <option value="trainer">I'm a Trainer</option>
      </select>

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 rounded bg-[#E53935] text-white font-semibold ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Saving..." : "Complete Setup"}
      </button>

      {error && <p className="text-sm text-red-500">{error}</p>}
    </form>
  );
}
