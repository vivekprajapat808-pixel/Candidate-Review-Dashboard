import { useStore } from "../context/store";
import PriorityBadge from "./PriorityBadge";
import { motion } from "framer-motion";

export default function CandidateTable({ list }) {
  const { setSelected, toggleCompare } = useStore();

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border dark:border-gray-700 overflow-hidden">
      
      {/* TABLE WRAPPER */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          
          {/* HEADER */}
          <thead className="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 uppercase text-xs tracking-wider">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">College</th>
              <th className="px-4 py-3">Assignment</th>
              <th className="px-4 py-3">Video</th>
              <th className="px-4 py-3">ATS</th>
              <th className="px-4 py-3">Priority</th>
              <th className="px-4 py-3 text-center">Compare</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="divide-y dark:divide-gray-700">
            {list.map((c) => (
              <motion.tr
                key={c.id}
                whileHover={{ scale: 1.01 }}
                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer"
              >
                {/* NAME */}
                <td
                  onClick={() => setSelected(c)}
                  className="px-4 py-3 font-medium text-gray-800 dark:text-white"
                >
                  {c.name}
                </td>

                {/* COLLEGE */}
                <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
                  {c.college}
                </td>

                {/* SCORES */}
                <td className="px-4 py-3">{c.assignment_score}</td>
                <td className="px-4 py-3">{c.video_score}</td>
                <td className="px-4 py-3">{c.ats_score}</td>

                {/* PRIORITY */}
                <td className="px-4 py-3">
                  <PriorityBadge label={c.priority.label} />
                </td>

                {/* COMPARE */}
                <td className="px-4 py-3 text-center">
                  <input
                    type="checkbox"
                    onChange={() => toggleCompare(c)}
                    className="w-4 h-4 accent-blue-600 cursor-pointer"
                  />
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* EMPTY STATE */}
      {list.length === 0 && (
        <div className="p-6 text-center text-gray-500 dark:text-gray-400">
          No candidates found
        </div>
      )}
    </div>
  );
}