import { useState, useEffect } from "react";

function Flashcard({ word, level, isFlipped, onFlip }) {
  return (
    <div
      onClick={onFlip}
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