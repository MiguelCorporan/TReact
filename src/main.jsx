import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextoApp from "./Components/ContextoApp";
import ContextoCard from "./Components/ContextoCard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextoApp>
      <ContextoCard>
        <App />
      </ContextoCard>
    </ContextoApp>
  </React.StrictMode>
);
