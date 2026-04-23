const rand = () => Math.floor(Math.random() * 100);

export const generateCandidates = () =>
  Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Student ${i + 1}`,
    college: ["ABC Institute","XYZ College","Tech University"][i % 3],
    assignment_score: rand(),
    video_score: rand(),
    ats_score: rand(),
    github_score: rand(),
    communication_score: rand(),
    reviewed: Math.random() > 0.5
  }));
