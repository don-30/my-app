import React from 'react';
import './App.css';

const show = {
  title: 'The Vampire Diaries',
  description: 'A supernatural drama that follows the lives of Elena Gilbert and the vampire brothers Stefan and Damon Salvatore.',
  characters: [
    { id: 1, name: 'Elena Gilbert' },
    { id: 2, name: 'Stefan Salvatore' },
    { id: 3, name: 'Damon Salvatore' },
    { id: 4, name: 'Caroline Forbes' },
    { id: 5, name: 'Bonnie Bennett' },
  ],
  episodes: [
    { id: 1, title: 'Pilot' },
    { id: 2, title: 'The Night of the Comet' },
    { id: 3, title: 'Maybe I\'m Amazed' },
    { id: 4, title: 'Family Ties' },
    { id: 5, title: 'Bloodlines' },
  ],
};

function App() {
  return (
    <div className="App">
      <h1>{show.title}</h1>
      <p>{show.description}</p>
      <h2>Main Characters</h2>
      <ul>
        {show.characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
      <h2>Episodes</h2>
      <ul>
        {show.episodes.map((episode) => (
          <li key={episode.id}>{episode.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;


