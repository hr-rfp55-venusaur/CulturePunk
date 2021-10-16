import React from 'react';
import './App.css';
import ContextObj from './ContextObj';
import BasicTile from './Components/Homepage/BasicTile';

const App = () => (
  <div className="App">
    <ContextObj.Provider>
      <header className="App-header">
        <BasicTile
          img="https://lh3.googleusercontent.com/proxy/x2F1zOc0GhMh2CXjK-v7qyZQsxm-O3VaYcPITlFDLwv0hSC_h3mXkEH_8rNeWFBByvZldJAB5UhxwR6CRHepZlNRt4ouie3mTV3aCRkt0ZVNu3c4c7eTFXfMMyvKk5PfVtPSktV8LZ9YJepycREGo6vM5H-G4HOKBqEWkOf6XUlGVsBhxmzi0DYfskjwhrUvLGPByIQNcnCvVInULodzkOOo3v-A7j-Sbnv9i8QJwfHf"
          imgAlt="The Pokemon Venusaur"
          title="Venusaur (when-you-soar)"
          desc="Known as the Seed Pokémon, The final stage of the Bulbasaur evolution tree. The seed on the back of Bulbasaur bloomed into a huge flower, vaguely resembling a Rafflesia."
        />
      </header>
    </ContextObj.Provider>
  </div>
);

export default App;
