import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";

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
                // console.log("xhr.responseText", objResponse);
                // console.log("xhr.responseText", xhr.responseText);
            }
        }
    }

    addTrack = () => {
        console.log("addTrack", this.trackInput.value);
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = "";
    };
    render() {
        console.log("this.props", this.props);
        return (

            <div className="App">
                <input type="text" ref={(input) => {this.trackInput = input}}/>
                <button onClick={this.addTrack}>Add track</button>
                <ul>
                    {this.props.testStore.map((track, index) =>
                        <li key={index}>{track}</li>
                    )}
                </ul>
            </div>

        );
    }
}


export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        onAddTrack: (trackName) => {
            dispatch({type: "ADD_TRACK", payload: trackName})
        }
    })
)(App);
