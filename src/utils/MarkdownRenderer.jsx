import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const fallbackPath = "/Materials/DataNotReady.md"; // your fallback Markdown path

const MarkdownRenderer = ({ src }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchContent = async (url) => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("File not found");

        const text = await res.text();

        // Check if the content looks like HTML (indicating fallback index.html was served)
        if (text.trim().startsWith("<!DOCTYPE") || text.trim().startsWith("<html") || text.includes("<body")) {
          // If HTML detected, fetch fallback markdown instead
          const fallbackRes = await fetch(fallbackPath);
          if (!fallbackRes.ok) throw new Error("Fallback file not found");
          const fallbackText = await fallbackRes.text();
          setContent(fallbackText);
        } else {
          // If not HTML, set the fetched markdown content normally
          setContent(text);
        }
      } catch (err) {
        // On fetch error, load fallback markdown
        try {
          const fallbackRes = await fetch(fallbackPath);
          if (!fallbackRes.ok) throw new Error("Fallback file not found");
          const fallbackText = await fallbackRes.text();
          setContent(fallbackText);
        } catch (fallbackErr) {
          setContent("# Error loading content");
          console.error(fallbackErr);
        }
      }
    };

    fetchContent(src);
  }, [src]);

  return (
    <div className="markdown-body">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
