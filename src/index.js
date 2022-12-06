import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; //bridge between react and redux
import { createStore, applyMiddleware, compose } from "redux";
import Reducers from "./store/Reducers/Index";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

const EhnaceCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = EhnaceCompose(applyMiddleware(thunk))(createStore);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store(Reducers)}>
      <AppRoutes />
    </Provider>
  </BrowserRouter>
);