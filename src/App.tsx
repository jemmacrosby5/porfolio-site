import "@/App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/NavBar";

import Home from "@pages/Home";
import CrosbySnacks from "@pages/about-pages/CrosbySnacks";
import StravaStats from "@pages/about-pages/StravaStats";

function App() {
  return (
    <>
      <header className="border-b">
        <Navbar />
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crosby-snacks" element={<CrosbySnacks />} />
          <Route path="/strava-stats" element={<StravaStats />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
