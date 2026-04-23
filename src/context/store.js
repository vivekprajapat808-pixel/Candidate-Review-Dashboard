import { create } from "zustand";
import { generateCandidates } from "../data/candidates";
import { calculatePriority } from "../utils/priority";

export const useStore = create((set) => ({
  candidates: generateCandidates().map((c) => ({
    ...c,
    priority: calculatePriority(c),
  })),

  selected: null,
  compare: [],

  setSelected: (c) => set({ selected: c }),

  // ✅ Update candidate + keep compare + selected in sync
  updateCandidate: (updated) =>
    set((state) => {
      const updatedWithPriority = {
        ...updated,
        priority: calculatePriority(updated),
      };

      return {
        candidates: state.candidates.map((c) =>
          c.id === updated.id ? updatedWithPriority : c
        ),
        selected: updatedWithPriority,
        compare: state.compare.map((c) =>
          c.id === updated.id ? updatedWithPriority : c
        ),
      };
    }),

  // 🔥 SMART COMPARISON FEATURE
  toggleCompare: (candidate) =>
    set((state) => {
      const exists = state.compare.find((c) => c.id === candidate.id);

      // ✅ 1. Toggle off if already selected
      if (exists) {
        return {
          compare: state.compare.filter((c) => c.id !== candidate.id),
        };
      }

      // ✅ 2. Add if less than 3
      if (state.compare.length < 3) {
        return {
          compare: [...state.compare, candidate],
        };
      }

      // ✅ 3. If already 3 → remove weakest (lowest priority score)
      const sorted = [...state.compare].sort(
        (a, b) => a.priority.score - b.priority.score
      );

      const removed = sorted[0]; // weakest
      const remaining = sorted.slice(1);

      console.log(
        `Removed weakest: ${removed.name} (${removed.priority.score})`
      );

      return {
        compare: [...remaining, candidate],
      };
    }),
}));