import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

function App() {
  const [inputText, setinputText] = useState("");
  const [suggestedText, setsuggestedText] = useState("");

  const handleInputChange = (e) => {
    const text = e.target.value;
    setinputText(text);

    const words = text.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });

    const correctedText = correctedWords.join(" ");

    const firstCorrections = correctedWords.find(
      (word, index) => word !== words[index]
    );
    setsuggestedText(firstCorrections || "");
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows={5}
        cols={40}
      />
      {suggestedText && (
        <p>
          Did you mean: <strong>{suggestedText}</strong>?
        </p>
      )}
    </div>
  );
}

export default App;
