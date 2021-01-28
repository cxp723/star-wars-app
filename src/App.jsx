import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header.jsx";
import Routes from "./routes/Routes";
import store from "./redux/store";

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div className="layout">
        <Header />
        <Routes />
      </div>
    </Provider>
  </BrowserRouter>
);

export default App;
