import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
// import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { store } from "../app/store.js";
import axios from "axios";
axios.defaults.baseURL="http://localhost:3000/pet"
axios.defaults.withCredentials= true;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Toaster position="top-right" />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
