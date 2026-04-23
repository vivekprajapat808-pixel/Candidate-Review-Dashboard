import clsx from "clsx";

export default function PriorityBadge({ label }) {
  const styles = {
    P0: "bg-green-100 text-green-700 border-green-200",
    P1: "bg-yellow-100 text-yellow-700 border-yellow-200",
    P2: "bg-orange-100 text-orange-700 border-orange-200",
    P3: "bg-red-100 text-red-700 border-red-200",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border",
        styles[label]
      )}
    >
      {/* Dot */}
      <span
        className={clsx(
          "w-2 h-2 rounded-full",
          {
            "bg-green-500": label === "P0",
            "bg-yellow-500": label === "P1",
            "bg-orange-500": label === "P2",
            "bg-red-500": label === "P3",
          }
        )}
      />

      {label}
    </span>
  );
}