/**
 * Generates a relative path to the content file based on selected sprint and day.
 * @param {string} sprintId - The sprint identifier, e.g., "SPRINT_01"
 * @param {string} dayId - The day identifier, e.g., "DAY_002"
 * @returns {string} - Path to the Notes.md file
 */

const generateReferencePath = (sprintId, dayId) => {
  if (!sprintId || !dayId) {
    console.warn("Missing sprintId or dayId in generateReferencePath");
    return '../../Materials/DataNotReady.md';
  }

  // Normalize input to ensure consistency
  const normalizedSprint = sprintId.toUpperCase().replace(/\s+/g, "_");
  const normalizedDay = dayId.toUpperCase().replace(/\s+/g, "_");

  // Return relative path for use in markdown renderer or content fetcher
  return `../Materials/${normalizedSprint}/${normalizedDay}/Notes.md`;
};

export default generateReferencePath;
/*
\src\..\..\Navigator.jsx
\src\Materials\DataNotReady.md
*/
