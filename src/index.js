import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import {createStore} from "redux";

const initialState = [
    "Smells like spirit",
    "Enter Sandman"
];

function playlist(state = initialState, action) {
    console.log(action);
    if(action.type === "ADD_TRACK") {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}

const store = createStore(playlist);


// store.subscribe(() => {
//     console.log("state: ", store.getState());
// });
//
// store.dispatch({
//     type: "ADD_TRACK",
//     payload: "Some text here"
// });
// store.dispatch({
//     type: "ADD_TRACK",
//     payload: "Some text here added"
// });

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
