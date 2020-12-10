import logo from './logo.svg';
import './App.css';

function App() {

  state = {
    states: [
      '', 
      ''
    ]
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Where is the 'gay panic defense' legal?</p>
        <p>The 'gay panic defense' is a legal strategy in which a defendant claims they acted in a state of voilent, temporary insanitty, committing assault or murder, because of an unwanted sexual advance from a person in the LGBTQ+ community. </p>
        <p>Shocked by this? Type in a state that you assume this wouldn't be legal. If it matches this is a law in that state.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
