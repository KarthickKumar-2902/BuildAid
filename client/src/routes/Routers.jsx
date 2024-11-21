import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Builders from "../pages/builders/Builders";
import BuilderDetails from "../pages/builders/BuilderDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import Services from "../pages/Services";

const Routers = () => {
  return <>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/builders" element={<Builders/>} />
        <Route path="/builder/:id" element={<BuilderDetails/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
    </Routes>
  </>

};

export default Routers;
