import React from "react";
import MarkdownRenderer from '../../../utils/MarkdownRenderer';
import notesMd from './NoteTemplate.md';

// just add the file names, it will be enough


const Sprint01Day001 = () => {
  return (
    <section className="eachday-template">
      <div className="eachdaytemp_header">
        <button className="view_closer_btn">Close</button>
        <h1 className="eachdaytemp_header_title">Sprint XX | Day XXX</h1>
      </div>
      <div className="eachdaytemp_container">
        <div className="eachdat_topic_name">
          <h2>Topic name</h2>
          <p className="eachdaytemp_topic_name_desc">
            <ul>
              <li>Spint XX: #Sprint Name</li>
              <li>Day XXX: #Day's Topic Name</li>
            </ul>
          </p>
        </div>

        <div className="eachdaytemp_notes">
          <h2>Notes</h2>
          <div className="markdown_display">
            <MarkdownRenderer file={notesMd} />
          </div>
        </div>

        <div className="eachdaytemp_cheetsheet">
          <h2>Cheat Sheet</h2>
          <button className="dnld_chtsht">download cheat sheat</button>
          <div className="markdown_display">
            <MarkdownRenderer file={notesMd} />
          </div>
        </div>

        <div className="eachdaytemp_practicequestions">
          <h2>Practice Questions</h2>
          <div className="markdown_display">
            <MarkdownRenderer file={notesMd} />
          </div>
        </div>

        <div className="eachdaytemp_keytakeaways">
          <h2>Key Takeaways & common mistakes</h2>
          <div className="markdown_display">
            <MarkdownRenderer file={notesMd} />
          </div>
        </div>




      </div>
    </section>
  );
};

export default Sprint01Day001;