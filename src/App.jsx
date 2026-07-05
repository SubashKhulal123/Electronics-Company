import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
