import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My first deploy</p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/willvwms/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn: willvwms
        </a>
      </header>
    </div>
  );
}

export default App;
