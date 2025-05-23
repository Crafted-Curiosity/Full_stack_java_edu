import React, { useState, useEffect } from "react";
import DisplayContent from "./DisplayContent";
import generateReferencePath from "../../utils/ReferencePathGenerator";
import SprintData,{ getAllSprints, getDayFolders } from "../../utils/DynamicLoader";
import "../../styling/homepagestyling/navigator.css";

const Navigator = () => {
    const [selectedSprint, setSelectedSprint] = useState("SPRINT_01");
    const [dayList, setDayList] = useState(getDayFolders("SPRINT_01"));
    const [selectedDay, setSelectedDay] = useState("DAY_000");
    const [contentPath, setContentPath] = useState(generateReferencePath("SPRINT_01", "DAY_000"));

    useEffect(() => {
        setDayList(getDayFolders(selectedSprint));
        setSelectedDay("DAY_000"); // reset to default first day
        setContentPath(generateReferencePath(selectedSprint, "DAY_000"));
    }, [selectedSprint]);
    
    
    
    const handleDayClick = (dayId) => {
        setSelectedDay(dayId);
        const path = generateReferencePath(selectedSprint, dayId);
        setContentPath(path);
        //alert(`Selected path: ${path}`);
    };

  return (
    
    <section className="navigator">

        <div className="navigator-content">
            <div className="sprint-menu">
                <h2>Sprint Menu</h2>
                <ul className="sprint-list">
                     {getAllSprints().map(({ sprintId, sprintName }) => (
                        <li key={sprintId}>
                            <button
                                id={sprintId}
                                className={`navigator-button ${selectedSprint === sprintId ? "active" : ""}`}
                                onClick={() => setSelectedSprint(sprintId)}
                            >
                                {sprintId} - {sprintName}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="day-menu">
                <h2>Day Menu for {SprintData[selectedSprint]?.sprintName || selectedSprint}</h2>
                <ul className="day-list">
                    {dayList.map(({ dayId, dayName }) => (
                        <li key={dayId}>
                            <button
                                id={dayId}
                                className={`navigator-button ${
                                selectedDay === dayId ? "active" : ""}`}
                                onClick={() => handleDayClick(dayId)}
                            >
                                <span className="day-id-style">{dayId}</span> <span className="day-name-style">{dayName}</span>
                            </button>
                        </li>
                ))}
                </ul>
            </div>
        </div>

        <div className="content-display">
            <h1>Enjoy Gaining Knowledge</h1>
            <DisplayContent
                path={contentPath}
                    sprintId={selectedSprint}
                    sprintName={SprintData[selectedSprint]?.sprintName || selectedSprint}
                    dayId={selectedDay}
                    dayName={dayList.find(day => day.dayId === selectedDay)?.dayName || ''}
            />
        </div>    
    </section>
    );
};

export default Navigator;