import { useState } from "react";
import { useStore } from "../context/store";
import Summary from "../components/Summary";
import Filters from "../components/Filters";
import CandidateTable from "../components/CandidateTable";
import Drawer from "../components/Drawer";
import Comparison from "../components/Comparison";

export default function Dashboard() {
  const { candidates } = useStore();

  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    assignment: [0, 100],
    video: [0, 100],
    ats: [0, 100],
    reviewed: "all",
  });

  const filtered = candidates.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
    const matchAssign =
      c.assignment_score >= filters.assignment[0] &&
      c.assignment_score <= filters.assignment[1];
    const matchVideo =
      c.video_score >= filters.video[0] &&
      c.video_score <= filters.video[1];
    const matchATS =
      c.ats_score >= filters.ats[0] &&
      c.ats_score <= filters.ats[1];
    const matchReview =
      filters.reviewed === "all" ||
      String(c.reviewed) === filters.reviewed;

    return (
      matchSearch &&
      matchAssign &&
      matchVideo &&
      matchATS &&
      matchReview
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
      
      {/* HEADER */}
      <div className="bg-white dark:bg-gray-900 border-b px-6 py-4 flex items-center justify-between shadow-sm">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          Candidate Dashboard
        </h1>

        <input
          placeholder="Search candidates..."
          className="w-64 px-4 py-2 border rounded-lg text-sm 
          focus:outline-none focus:ring-2 focus:ring-blue-500
          dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="p-6 space-y-6">

        {/* SUMMARY */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-4">
          <Summary />
        </div>

        {/* FILTERS */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-4">
          <Filters filters={filters} setFilters={setFilters} />
        </div>

        {/* TABLE */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-4 overflow-x-auto">
          <CandidateTable list={filtered} />
        </div>

        {/* COMPARISON */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-4">
          <Comparison />
        </div>
      </div>

      {/* DRAWER */}
      <Drawer />
    </div>
  );
}