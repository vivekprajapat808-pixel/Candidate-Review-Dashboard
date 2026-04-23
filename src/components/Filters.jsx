export default function Filters({ filters, setFilters }) {
  const updateRange = (key, idx, val) => {
    const copy = { ...filters };
    copy[key][idx] = Number(val);
    setFilters(copy);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border dark:border-gray-700 p-5 mb-6">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Filters
        </h3>
      </div>

      {/* FILTER GRID */}
      <div className="grid md:grid-cols-4 gap-6">

        {/* RANGE FILTERS */}
        {["assignment", "video", "ats"].map((k) => (
          <div key={k} className="space-y-3">
            
            {/* Label */}
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
              {k} Score
            </div>

            {/* Sliders */}
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="100"
                value={filters[k][0]}
                onChange={(e) => updateRange(k, 0, e.target.value)}
                className="w-full accent-blue-600 cursor-pointer"
              />

              <input
                type="range"
                min="0"
                max="100"
                value={filters[k][1]}
                onChange={(e) => updateRange(k, 1, e.target.value)}
                className="w-full accent-blue-600 cursor-pointer"
              />
            </div>

            {/* Range Display */}
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>{filters[k][0]}</span>
              <span>{filters[k][1]}</span>
            </div>
          </div>
        ))}

        {/* REVIEW STATUS */}
        <div className="space-y-3">
          <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Review Status
          </div>

          <select
            className="w-full px-3 py-2 border rounded-lg text-sm 
            focus:outline-none focus:ring-2 focus:ring-blue-500
            dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            value={filters.reviewed}
            onChange={(e) =>
              setFilters({ ...filters, reviewed: e.target.value })
            }
          >
            <option value="all">All Candidates</option>
            <option value="true">Reviewed</option>
            <option value="false">Pending</option>
          </select>
        </div>
      </div>
    </div>
  );
}