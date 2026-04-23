import { useStore } from "../../context/store";
import { useState } from "react";

export default function AssignmentPanel({ candidate }) {
  const { updateCandidate } = useStore();
  const [value, setValue] = useState(candidate.assignment_score / 20);

  const handleChange = (val) => {
    setValue(val);
    updateCandidate({
      ...candidate,
      assignment_score: val * 20,
    });
  };

  return (
    <div className="mt-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm p-5 border dark:border-gray-700">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Assignment Evaluation
        </h3>
        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
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
          className="w-full accent-blue-600 cursor-pointer"
        />

        {/* Labels */}
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>Poor</span>
          <span>Average</span>
          <span>Excellent</span>
        </div>
      </div>

      {/* Description */}
      <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
        Evaluate overall assignment quality based on UI, structure, and logic.
      </p>
    </div>
  );
}