// DynamicLoader.js

// Simulated day folders loader based on sprint selection.
// In real apps, this could be dynamic import or FS fetch in a Node environment.

// DynamicLoader.js

const SprintData = {
  SPRINT_01: {
    sprintName: "Core Java Mastery",
    days: {
      DAY_000: { dayName: "Introduction to Java" },
      DAY_001: { dayName: "Variables, Data Types, Operators" },
      DAY_002: { dayName: "Control Flow" },
      DAY_003: { dayName: "Input & Parsing" },
      DAY_004: { dayName: "Arrays & Strings" },
      DAY_005: { dayName: "Object-Oriented Programming (OOP) Basics" },
      DAY_006: { dayName: "OOP Deep Dive" },
      DAY_007: { dayName: "Abstraction & Polymorphism" },
      DAY_008: { dayName: "Exception Handling" },
      DAY_009: { dayName: "Java Collections Framework (JCF) – Part 1 + Generics" },
      DAY_010: { dayName: "Java Collections Framework (JCF) – Part 2" },
      DAY_011: { dayName: "Java 8 Features" },
      DAY_012: { dayName: "File I/O Basics" },
      DAY_013: { dayName: "Multithreading & Concurrency" },
      DAY_014: { dayName: "Review and Practice Coding Challenges" },
      DAY_015: { dayName: "Interview Preparation & Final Project" }
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
  SPRINT_03: {
    sprintName: "JDBC + MySQL + Java I/O",
    days: {
      DAY_000: { dayName: "Big-O & Complexity" },
      // ...
    }
  },
  SPRINT_04: {
    sprintName: "OOP Projects & Java Mini Apps",
    days: {
      DAY_000: { dayName: "Big-O & Complexity" },
      // ...
    }
  },
  SPRINT_05: {
    sprintName: "Spring & Spring Boot Fundamentals",
    days: {
      DAY_000: { dayName: "Big-O & Complexity" },
      // ...
    }
  },
  SPRINT_06: {
    sprintName: "Spring Boot + REST API Development",
    days: {
      DAY_000: { dayName: "Big-O & Complexity" },
      // ...
    }
  },
  SPRINT_07: {
    sprintName: "Full Stack Java Web App (Spring Boot + React)",
    days: {
      DAY_000: { dayName: "Big-O & Complexity" },
      // ...
    }
  },
  SPRINT_08: {
    sprintName: "Security, JWT & OAuth2 (Spring Security)",
    days: {
      DAY_000: { dayName: "Big-O & Complexity" },
      // ...
    }
  },
  SPRINT_09: {
    sprintName: "Deployment & DevOps Basics (AWS, GCP, CI/CD) ",
    days: {
      DAY_000: { dayName: "Big-O & Complexity" },
      // ...
    }
  },
  SPRINT_10: {
    sprintName: "Microservices & System Design",
    days: {
      DAY_000: { dayName: "Big-O & Complexity" },
      // ...
    }
  },
  SPRINT_11: {
    sprintName: "AI Integration & LLMs in Apps",
    days: {
      DAY_000: { dayName: "Big-O & Complexity" },
      // ...
    }
  },
  SPRINT_12: {
    sprintName: "Product Building & Monetization (Crafted Curiosity Ecosystem)",
    days: {
      DAY_000: { dayName: "Big-O & Complexity" },
      // ...
    }
  },
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
