import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "pages/Home/Home";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<main><h1 style={{ textAlign: "center", paddingTop: "5rem" }}>Page Not Found!</h1></main>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;