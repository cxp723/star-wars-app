import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import Header from "./components/Header.jsx";
import Routes from "./routes/Routes";
import store from "./redux/store";

const App = () => (
  <HashRouter>
    <Provider store={store}>
      <div className="layout">
        <Header />
        <Routes />
      </div>
    </Provider>
  </HashRouter>
);

export default App;
