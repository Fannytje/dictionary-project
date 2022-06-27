import './App.css';
import dictionary from "./dictionary-image.png";
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
      <img src={dictionary} className="App-logo img-fluid" alt="icon" />
      </header>
      <main>
        <Dictionary /> 
      </main>
    <footer className="App-footer"> 
      <small>Coded by Fanny N</small>
      </footer>
    </div>
  </div>
  );
}


