import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Facebook from "./assets/Icons/Facebook";
import Instagram from "./assets/Icons/Instagram";
import Telegram from "./assets/Icons/Telegram";
import Models from "./components/Models/Models";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product/Product";
import ReactGa from "react-ga";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    ReactGa.initialize("UA-141678075-1");
    ReactGa.pageview("/");
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="main container">
          <Routes>
            <Route path="/" element={<Models />}></Route>
            <Route path="/product/:id" element={<Product />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
      <div className="footer">
        <div className="web-pages container">
          <a href="https://www.facebook.com/" target="_blank">
            <Facebook />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <Instagram />
          </a>
          <a href="https://web.telegram.org/z/" target="_blank">
            <Telegram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
