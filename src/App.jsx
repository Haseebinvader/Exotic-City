import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Layout from "./Layout/Layout"
import Food from "./pages/Product_Pages/Food"
import Cosmetics from "./pages/Product_Pages/Cosmetics"
import Hair from "./pages/Product_Pages/Hair"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"

function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Drinks" element={<Food />} />
            <Route path="/Cosmetics" element={<Cosmetics />} />
            <Route path="/Hair" element={<Hair />} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
