import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@slices";
import App from "@components/app";

const container = document.getElementById("root");

createRoot(container).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);
