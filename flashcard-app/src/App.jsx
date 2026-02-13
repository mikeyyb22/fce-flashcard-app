import { useState } from "react";
import { useEffect } from "react";
import Flashcard from "./flashcard";

function App() {
  useEffect(() => {
    console.log("App loaded!");
  }, []);

  const [flippedId, setFlippedId] = useState(null);
  // setFlashcards for when we start creating and updating cards dynamically
  const [flashcards, setFlashcards] = useState([
    { id: 1, word: "apple", level: 1 },
    { id: 2, word: "banana", level: 2 },
    { id: 3, word: "orange", level: 3 }
  ]);
  const [reviewCount, setReviewCount] = useState(0);

  // When card flips, increase review count
  const handleFlip = (id) => {
    setFlippedId(id);
    setReviewCount(prev => prev + 1);
  }

  return (
    <div>
      <h1>My Flashcards</h1>
      <h2>Cards reviewed: {reviewCount}</h2>
      {flashcards.map(card => (
        <Flashcard
          key={card.id}
          word={card.word}
          level={card.level}
          isFlipped={flippedId === card.id}
          onFlip={() => handleFlip(card.id)}
        />
      ))}
    </div>
  );
}

export default App;