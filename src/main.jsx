import React, {StrictMode} from "react";
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";

const rootElemet = document.getElementById('root');
const root = createRoot(rootElemet);

root.render(
  <StrictMode>
    <App/>
  </StrictMode>,
)