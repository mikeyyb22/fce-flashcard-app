import Flashcard from "./flashcard";

function App() {
  const flashcards = [
    { id: 1, word: "apple", level: 1 },
    { id: 2, word: "banana", level: 2 },
    { id: 3, word: "orange", level: 3 }
  ];

  return (
    <div>
      <h1>My Flashcards</h1>
      {flashcards.map(card => (
        <Flashcard
          key={card.id}
          word={card.word}
          level={card.level}
        />
      ))}
    </div>
  );
}

export default App;