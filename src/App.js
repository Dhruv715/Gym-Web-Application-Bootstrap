// import logo from './logo.svg';
import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";

import Footer from "./component/Footer";
import Home from "./component/Home";
import Login from "./component/Login";
import Navbars from "./component/Navbar";
import Register from "./component/Register";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbars />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="About" />
        <Route element={<Contact />} path="Contact" />
        <Route element={<Register />} path="Register" />
        <Route element={<Login />} path="Login" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
