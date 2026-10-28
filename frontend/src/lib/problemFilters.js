export const getProblemTopics = (problems) =>
  [...new Set(problems.flatMap((problem) => problem.category.split(" • ")))].sort();

export const getDifficultyCounts = (problems) =>
  Object.fromEntries(["Easy", "Medium", "Hard"].map((level) => [
    level,
    problems.filter((problem) => problem.difficulty === level).length,
  ]));

export const filterProblems = (problems, { query = "", topic = "", difficulty = "" } = {}) => {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  return problems.filter((problem) => {
    const matchesTitle = !normalizedQuery || problem.title.toLocaleLowerCase().includes(normalizedQuery);
    const matchesTopic = !topic || problem.category.split(" • ").includes(topic);
    const matchesDifficulty = !difficulty || problem.difficulty === difficulty;
    return matchesTitle && matchesTopic && matchesDifficulty;
  });
};
