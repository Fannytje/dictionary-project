import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
      <h1>
        Dictionary
      </h1>
      </header>
      <main>
        <Dictionary defaultKeyword="lemur" /> 
      </main>
    <footer className="App-footer"> 
      <small>This project was coded by Fanny Nordberg and is <a href="https://github.com/Fannytje/dictionary-project" target="_blank" rel="noreferrer noopener">open-sourced on Github.</a></small>
      </footer>
    </div>
  </div>
  );
}


