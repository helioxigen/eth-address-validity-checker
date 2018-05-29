import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import store from "./store";

import "./style.scss";

const appStore = createStore(store);

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>,
    document.getElementById("app")
);
