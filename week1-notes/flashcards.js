const words = ["apple", "banana", "orange"];

// convert each word to an object
const flashcards = words.map(word => ({
    word: word,
    due: new Date(),
    level: 1
}));

const lvl1 = flashcards.filter(card => card.level === 1);