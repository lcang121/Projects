import React from 'react';
import './App.css';
import Library from './components/Library';
import BookList from './components/BookList'

function App() {
  return (
    <div className="App">
      <Library books={BookList} />
    </div>
  );
}

export default App;





