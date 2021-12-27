// import logo from './logo.svg';
import "./App.css";
import "./";
import MyFirstComponent from "./MyFirstComponent";
import MySecondComponent from "./MySecondComponent";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Hello All</h1>
      <MyFirstComponent />
      <MySecondComponent />
    </div>
  );
}

export default App;
