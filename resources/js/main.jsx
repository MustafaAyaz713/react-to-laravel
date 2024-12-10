import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "resources/js/App.jsx"; // App'i doğru bir şekilde içeri aktarıyoruz

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
