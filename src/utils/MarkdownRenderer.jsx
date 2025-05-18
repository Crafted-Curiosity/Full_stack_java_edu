import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
//import '../styling/markdown.css'; // Optional: your markdown styles

const MarkdownRenderer = ({ file, content }) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    if (file) {
      fetch(file)
        .then((res) => res.text())
        .then((text) => setMarkdown(text));
    } else if (content) {
      setMarkdown(content);
    }
  }, [file, content]);

  return (
    <div className="markdown-body">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

MarkdownRenderer.propTypes = {
  file: PropTypes.string,
  content: PropTypes.string,
};

export default MarkdownRenderer;
