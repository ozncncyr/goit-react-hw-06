import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { MoonLoader } from "react-spinners";
// import { persistStore } from "redux-persist";

createRoot(document.getElementById("root")).render(
  <Provider store={store} loading={<MoonLoader />}>
    <App />
  </Provider>
);
