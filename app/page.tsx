"use client"; // Required for Client Components in App Router

import React from "react";

export default function Home() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate some async work
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (true) {
      throw new Error("💥 Unhandled async error from form submission!");
    }
  };

  return (
    <div
      style={{
        padding: "2rem",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        rowGap: "20px",
      }}
    >
      <h1>Async Error Form Demo</h1>

      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            border: "1px solid white",
            backgroundColor: "#222",
            color: "white",
            cursor: "pointer",
          }}
        >
          Submit Form (Triggers Error)
        </button>
      </form>
    </div>
  );
}
