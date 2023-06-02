import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@slices";
import App from "@components/app";
import "@src/index.css";

const container = document.getElementById("root");

if (container !== null) {
  createRoot(container).render(
    <StrictMode>
      <Provider>
        <App />
      </Provider>
    </StrictMode>
  );
}
