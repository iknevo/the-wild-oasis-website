"use client";
import { useState } from "react";

interface Props {
  text: string;
}

function TextExpander({ text }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText = isExpanded
    ? text
    : text.split(" ").slice(0, 40).join(" ") + "...";

  return (
    <span>
      {displayText}{" "}
      <button
        className="text-primary-700 cursor-pointer border-b border-primary-700 leading-3 pb-1"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </span>
  );
}

export default TextExpander;
