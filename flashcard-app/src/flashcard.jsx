function Flashcard({ word, level }) {
  return (
    <div>
      <h2>{word}</h2>
      <p>Level {level}</p>
    </div>
  );
}

export default Flashcard;