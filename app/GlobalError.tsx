"use client";

import { useEffect } from "react";

export default function GlobalErrorListener() {
  useEffect(() => {
    // Catches async errors (like unhandled Promise rejections)
    window.onunhandledrejection = (event) => {
      console.log(
        "🌍 Global handler caught async error (Promise rejection):",
        event.reason
      );
    };

    // Catches sync errors that bubble up (less common in async handlers)
    window.onerror = (message, source, lineno, colno, error) => {
      console.log("🌍 Global handler caught sync error:", error);
    };

    return () => {
      // Cleanup when component unmounts
      window.onunhandledrejection = null;
      window.onerror = null;
    };
  }, []);

  return null; // No UI needed
}
