import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">

      {/* NAVBAR */}
      <div className="flex items-center justify-between px-6 py-4 
        bg-white dark:bg-gray-900 
        border-b dark:border-gray-700 
        shadow-sm">

        {/* LEFT */}
        <div>
          <h1 className="text-lg font-semibold text-gray-800 dark:text-white">
            Candidate Review Dashboard
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Internal Hiring Tool
          </p>
        </div>

        {/* RIGHT */}
        <button
          onClick={() => setDark((d) => !d)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
          bg-gray-100 hover:bg-gray-200 
          dark:bg-gray-800 dark:hover:bg-gray-700 
          text-gray-700 dark:text-gray-200 
          transition"
        >
          {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-4 sm:p-6">
        <Dashboard />
      </div>
    </div>
  );
}