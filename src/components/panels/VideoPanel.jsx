import { useStore } from "../../context/store";
import { useState } from "react";

export default function VideoPanel({ candidate }) {
  const { updateCandidate } = useStore();

  const [value, setValue] = useState(candidate.video_score / 20);
  const [notes, setNotes] = useState("");

  const handleChange = (val) => {
    setValue(val);
    updateCandidate({
      ...candidate,
      video_score: val * 20,
    });
  };

  return (
    <div className="mt-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm p-5 border dark:border-gray-700">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Video Evaluation
        </h3>
        <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
          {value}/5
        </span>
      </div>

      {/* Slider */}
      <div className="flex flex-col gap-2">
        <input
          type="range"
          min="1"
          max="5"
          value={value}
          onChange={(e) => handleChange(Number(e.target.value))}
          className="w-full accent-purple-600 cursor-pointer"
        />

        {/* Labels */}
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>Unclear</span>
          <span>Average</span>
          <span>Excellent</span>
        </div>
      </div>

      {/* Notes Section */}
      <div className="mt-4">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Timestamp Notes
        </label>

        <textarea
          placeholder="e.g. 02:10 – clear explanation, 03:15 – unclear reasoning"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="mt-2 w-full p-3 text-sm border rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-purple-500
          dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          rows={3}
        />
      </div>

      {/* Helper Text */}
      <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
        Evaluate clarity, confidence, architecture explanation, and communication.
      </p>
    </div>
  );
}