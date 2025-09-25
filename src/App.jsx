// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Details from "./pages/Details.jsx";
import Header from "./components/Header.jsx";
import "./styles.css"; // garante que o CSS carregue

export default function App() {
  return (
    <>
      <Header />
      <main className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Details />} />
        </Routes>
      </main>
    </>
  );
}
