import { useState, useEffect } from "react";

function Flashcard({ word, level }) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    console.log(`Flashcard loaded: ${word}`)
  }, []);
  
  return (
    <div
      onClick={() => setIsFlipped(!isFlipped)}
      style={{
        border: "1px solid black",
        padding: "16px",
        marginBottom: "10px",
        cursor: "pointer",
      }}
    >
      {isFlipped ? (
        <p>Level {level}</p>
      ) : (
        <h2>{word}</h2>
      )}
    </div>
  );
}

export default Flashcard;