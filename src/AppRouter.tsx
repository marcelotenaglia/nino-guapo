import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Slogan } from "./components/Slogan/Slogan";
import { Work } from "./components/Work/Work";
import { Newsletter } from "./components/Newsletter/Newsletter";
import { Contact } from "./components/Contact/Contact";
import { Ideas } from "./components/Ideas/Ideas";
import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Slogan slogan="Diseñamos Ideas, amplificamos talentos." />}
        />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
      <hr
        style={{ border: "none", borderTop: "1px solid #e0e0e0", margin: "0" }}
      />
      <Footer />
    </BrowserRouter>
  );
};
