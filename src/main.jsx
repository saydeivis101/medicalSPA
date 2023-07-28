import React from "react";
import ReactDOM from "react-dom/client";
import { MedLife } from "./MedLife.jsx";
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MedLife />
    </BrowserRouter>
  </React.StrictMode>
);
