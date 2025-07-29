import { useEffect, useState } from "react";
import '../styles/home.css';

const TypingHeader = () => {
  const fullText = "Revolutionize businesses with Secure & Scalable Software Solutions";
  const words = fullText.split(" ");
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (wordIndex < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + (prev ? " " : "") + words[wordIndex]);
        setWordIndex((prev) => prev + 1);
      }, 500); // 500ms delay between each word

      return () => clearTimeout(timeout);
    }
  }, [wordIndex, words]);

  return <div className="homeheader">{displayedText}</div>;
};

export default TypingHeader;