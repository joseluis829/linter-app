import * as React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = (): JSX.Element => {
  const val: string = `12${5 + 6}`;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code> src/App.tsx </code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React-
          {val}
        </a>
      </header>
    </div>
  );
};

export default App;
