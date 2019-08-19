import React, { Fragment } from "react";

import { Provider } from "react-redux";

import Navigation from "./config/router";
import configureStore from "./store/index";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
