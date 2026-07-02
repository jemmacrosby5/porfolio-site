import "@/App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/NavBar";

import Home from "@pages/Home";

function App() {
  return (
    <>
      <header className="border-b">
        <Navbar />
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
