import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/router.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <AppRouter />
  </BrowserRouter>
);
