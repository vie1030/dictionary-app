import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">📚 Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            This is GitHub open-sourced project coded by Vie Santos and hosted
            on Netlify.com.
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
