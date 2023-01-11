import { Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Blogs from "./routes/Blogs";
import Contact from "./routes/Contact";
import Countdown from "./routes/Countdown";
import Home from "./routes/Home";
import Work from "./routes/Work";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/countdown" element={<Countdown />} />
      </Routes>
    </>
  );
}

export default App;
