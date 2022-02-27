import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">📚Dictionary📚</header>
        <main>
          <Dictionary defaultKeyword="coffee" />
        </main>
        <footer className="App-footer">
          <small>
            This is{" "}
            <a
              href="https://github.com/vie1030/dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              GitHub open-sourced
            </a>{" "}
            project coded by{" "}
            <a
              href="https://stupefied-liskov-3ef9b7.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Vie Santos
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://app.netlify.com/sites/brave-davinci-770b3d/overview/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify.com.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
