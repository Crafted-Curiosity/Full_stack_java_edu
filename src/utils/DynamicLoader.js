// DynamicLoader.js

// Simulated day folders loader based on sprint selection.
// In real apps, this could be dynamic import or FS fetch in a Node environment.

// DynamicLoader.js

const SprintData = {
  SPRINT_01: {
    sprintName: "Core Java Mastery",
    days: {
      DAY_000: { dayName: "Introduction" },
      DAY_001: { dayName: "Data Types & Variables" },
      DAY_002: { dayName: "Operators & Expressions" },
      // ...
      DAY_015: { dayName: "Fix the Gaps & Integration" }
    }
  },
  SPRINT_02: {
    sprintName: "DSA & Problem Solving",
    days: {
      DAY_000: { dayName: "Big-O & Complexity" },
      // ...
    }
  },
  // Extend as needed
};

export function getAllSprints() {
  return Object.entries(SprintData).map(([id, data]) => ({
    sprintId: id,
    sprintName: data.sprintName,
  }));
}

export function getDayFolders(sprintId) {
  const sprint = SprintData[sprintId];
  if (!sprint) return [];

  return Object.entries(sprint.days).map(([dayId, info]) => ({
    dayId,
    dayName: info.dayName,
  }));
}

export default SprintData;
