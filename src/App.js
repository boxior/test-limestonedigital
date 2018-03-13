import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        let xhr = new XMLHttpRequest(),
            objResponse;
        // xhr.open("GET", "https://api.github.com/", true);
        xhr.open("GET", "https://api.github.com/search/repositories?q=language:javascript&sort:stars/#rate-limiting=50", true);
        xhr.send();

        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;

            if (xhr.status !== 200) {
                console.log(`${xhr.status} ${xhr.statusText}`);
            } else {
                objResponse = JSON.parse(xhr.responseText);
                console.log("xhr.responseText", objResponse);
                // console.log("xhr.responseText", xhr.responseText);
            }
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
