import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layouts.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Landing from "./pages/Landing.jsx";
import Techs from "./pages/Techs.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";



export default function App() {
  return (
    <main style={{ padding: 16 }}>
      <Routes>
        <Route element ={<Layout />}>
          <Route path="/" element ={<Home />} />
          <Route path="/techs" element ={<Techs/>} />
          <Route path="/about" element ={<About />} />
          <Route path="/landing" element ={<Landing />} />
          <Route path="/contact" element ={<Contact />} />
          <Route path="*" element ={<NotFound />} />
        </Route>
      </Routes>
    </main>
  )
}