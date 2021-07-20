import logo from './logo.svg';
import './App.css';

var test;
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <div> Hello world</div>
                <a
                    className="App-link"
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn Sample App
                </a>
            </header>
        </div>
    );
}

export default App;
