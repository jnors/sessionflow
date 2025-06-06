"use client";

import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  duration?: number; // in ms
  type?: "success" | "error";
}

export default function Toast({ message, duration = 4000, type = "success" }: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timeout);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50`}>
      <div
        className={`px-4 py-3 rounded shadow-md text-white text-sm font-medium ${
          type === "success" ? "bg-green-600" : "bg-red-500"
        }`}
      >
        {message}
      </div>
    </div>
  );
}