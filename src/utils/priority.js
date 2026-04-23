export const calculatePriority = (c) => {
  const score =
    c.assignment_score * 0.3 +
    c.video_score * 0.25 +
    c.ats_score * 0.2 +
    c.github_score * 0.15 +
    c.communication_score * 0.1;

  let label = "P3";
  if (score >= 80) label = "P0";
  else if (score >= 65) label = "P1";
  else if (score >= 50) label = "P2";

  return { score: Math.round(score), label };
};
