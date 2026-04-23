import { useStore } from "../context/store";
import AssignmentPanel from "./panels/AssignmentPanel";
import VideoPanel from "./panels/VideoPanel";
import { motion } from "framer-motion";

export default function Drawer() {
  const { selected, setSelected } = useStore();
  if (!selected) return null;

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={() => setSelected(null)}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      />

      {/* DRAWER */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3 }}
        className="fixed right-0 top-0 h-full w-[380px] 
        bg-white dark:bg-gray-900 
        shadow-2xl z-50 
        flex flex-col"
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b dark:border-gray-700">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              {selected.name}
            </h2>
            <p className="text-xs text-gray-500">
              Candidate Details
            </p>
          </div>

          <button
            onClick={() => setSelected(null)}
            className="text-gray-500 hover:text-red-500 transition"
          >
            ✕
          </button>
        </div>

        {/* CONTENT */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">

          {/* SCORE CARDS */}
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
              <p className="text-gray-500 text-xs">ATS</p>
              <p className="font-semibold text-gray-800 dark:text-white">
                {selected.ats_score}
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
              <p className="text-gray-500 text-xs">Assignment</p>
              <p className="font-semibold text-gray-800 dark:text-white">
                {selected.assignment_score}
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
              <p className="text-gray-500 text-xs">Video</p>
              <p className="font-semibold text-gray-800 dark:text-white">
                {selected.video_score}
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
              <p className="text-gray-500 text-xs">GitHub</p>
              <p className="font-semibold text-gray-800 dark:text-white">
                {selected.github_score}
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg col-span-2">
              <p className="text-gray-500 text-xs">Communication</p>
              <p className="font-semibold text-gray-800 dark:text-white">
                {selected.communication_score}
              </p>
            </div>
          </div>

          {/* PANELS */}
          <div className="space-y-4">
            <AssignmentPanel candidate={selected} />
            <VideoPanel candidate={selected} />
          </div>
        </div>
      </motion.div>
    </>
  );
}