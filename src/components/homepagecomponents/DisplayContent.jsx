import React, {useState} from "react";
import MarkdownRenderer from "../../utils/MarkdownRenderer"; // Import the MarkdownRenderer component
//import MDDownloader from "../../utils/MDDdownloader"; // Import the MDDownloader utility
// imports path string in form of: "../Materials/${normalizedSprint}/${normalizedDay}/"
import '../../styling/homepagestyling/displaycontent.css'; // Import the CSS file for styling

const DisplayContent = ({ path, sprintId, sprintName, dayId, dayName }) => {
    const [activeTab, setActiveTab] = useState("Notes");

    const tabFiles = {
        Notes: "Notes.md",
        "Cheat Sheets": "Cheatsheet.md",
        Assignments: "Assignments.md",
    };

    const currentFile = tabFiles[activeTab];
    const filePath = `${path}${currentFile}`; // e.g. "/Materials/SPRINT_01/DAY_001/Notes.md"

  return (
    <section className="display-content">
        <div className="content-display-header">
            <h2>{`${sprintId}: ${sprintName}`}</h2>
            <h3>{`${dayId}: ${dayName}`}</h3>
        </div>

        <div className="content-display-navigator">
           <ul className="navigator-list">
                {Object.keys(tabFiles).map((tab) => (
                    <li key={tab}>
                        <button
                            className={`content-button ${activeTab === tab ? "active" : ""}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    </li>
                ))}
            </ul>
        </div>

        <div className="content-display-container">
            <div className="content-display-cd">
          <h3>{activeTab}</h3>
            {/*activeTab === "Cheat Sheets" && (
                <MDDownloader
                    downloadUrl={filePath}
                    filename={`${sprintId}_${dayId}_Cheatsheet.md`} // custom download filename
                >
                    <button className="btn-cheatsheet">Download</button>
                </MDDownloader>
            )*/}
            <MarkdownRenderer src={filePath} />
          </div>
        </div>
    </section>
    );
};

export default DisplayContent;