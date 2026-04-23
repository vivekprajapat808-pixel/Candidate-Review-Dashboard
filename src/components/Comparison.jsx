import { useStore } from "../context/store";
import PriorityBadge from "./PriorityBadge";

export default function Comparison() {
  const { compare } = useStore();

  if (compare.length < 2) return null;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border dark:border-gray-700 p-5 mt-6">
      
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Candidate Comparison
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">

          {/* HEADER */}
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-left">
              <th className="px-4 py-3">Metric</th>
              {compare.map((c) => (
                <th
                  key={c.id}
                  className="px-4 py-3 font-semibold text-gray-800 dark:text-white"
                >
                  {c.name}
                </th>
              ))}
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="divide-y dark:divide-gray-700">

            <tr>
              <td className="px-4 py-3 font-medium">Assignment</td>
              {compare.map((c) => (
                <td key={c.id} className="px-4 py-3">
                  {c.assignment_score}
                </td>
              ))}
            </tr>

            <tr className="bg-gray-50 dark:bg-gray-800">
              <td className="px-4 py-3 font-medium">Video</td>
              {compare.map((c) => (
                <td key={c.id} className="px-4 py-3">
                  {c.video_score}
                </td>
              ))}
            </tr>

            <tr>
              <td className="px-4 py-3 font-medium">ATS</td>
              {compare.map((c) => (
                <td key={c.id} className="px-4 py-3">
                  {c.ats_score}
                </td>
              ))}
            </tr>

            <tr className="bg-gray-50 dark:bg-gray-800">
              <td className="px-4 py-3 font-medium">GitHub</td>
              {compare.map((c) => (
                <td key={c.id} className="px-4 py-3">
                  {c.github_score}
                </td>
              ))}
            </tr>

            <tr>
              <td className="px-4 py-3 font-medium">Communication</td>
              {compare.map((c) => (
                <td key={c.id} className="px-4 py-3">
                  {c.communication_score}
                </td>
              ))}
            </tr>

            <tr className="bg-gray-50 dark:bg-gray-800">
              <td className="px-4 py-3 font-medium">Priority</td>
              {compare.map((c) => (
                <td key={c.id} className="px-4 py-3">
                  <PriorityBadge label={c.priority.label} />
                </td>
              ))}
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}