import { useState } from 'react'
import './App.css'
import JokeItem from './components/JokeList/JokeItem';

// PARENT COMPONENT (App.jsx)
const JOKES = [{ id: 1, text: "Joke A" }, { id: 2, text: "Joke B" }];

export default function App() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div>
      {JOKES.map(j => (
        <JokeItem
          key={j.id}
          joke={j}
          isSelected={selectedId === j.id}
          // GAP: Pass the setter function as a callback
          onSelect={setSelectedId}
        />
      ))}
    </div>
  );
}


