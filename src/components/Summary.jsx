import { useStore } from "../context/store";

export default function Summary() {
  const { candidates } = useStore();

  const total = candidates.length;
  const reviewed = candidates.filter((c) => c.reviewed).length;
  const shortlisted = candidates.filter(
    (c) => c.priority.label === "P0"
  ).length;
  const pending = total - reviewed;

  const cards = [
    {
      label: "Total Candidates",
      value: total,
      color: "text-blue-600",
      bg: "bg-blue-100",
      icon: "👥",
    },
    {
      label: "Reviewed",
      value: reviewed,
      color: "text-green-600",
      bg: "bg-green-100",
      icon: "✅",
    },
    {
      label: "Shortlisted",
      value: shortlisted,
      color: "text-yellow-600",
      bg: "bg-yellow-100",
      icon: "⭐",
    },
    {
      label: "Pending",
      value: pending,
      color: "text-red-600",
      bg: "bg-red-100",
      icon: "⏳",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mb-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border dark:border-gray-700 p-5 flex items-center gap-4 hover:shadow-md transition"
        >
          {/* ICON */}
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-lg ${card.bg}`}
          >
            <span className="text-lg">{card.icon}</span>
          </div>

          {/* TEXT */}
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {card.label}
            </p>
            <p
              className={`text-xl font-semibold ${card.color} dark:text-white`}
            >
              {card.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}