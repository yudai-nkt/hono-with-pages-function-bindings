import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            fetch("/api/raw")
              .then((r) => r.text())
              .then((t) => console.log(t));
          }}
        >
          GET <code>/api/raw</code>
        </button>
        <button
          onClick={() => {
            fetch("/api/hono")
              .then((r) => r.text())
              .then((t) => console.log(t));
          }}
        >
          GET <code>/api/hono</code>
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
