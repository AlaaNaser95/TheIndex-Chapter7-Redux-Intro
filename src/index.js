import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
import { createStore } from "redux"; //STEP 1
import { Provider } from "react-redux"; // STEP 2
import reducer from "./store/reducer"; //STEP 3

const store = createStore(reducer); //STEP 4

//STEP 5
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
