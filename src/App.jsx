import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Layout from "./Layout/Layout"
import Food from "./pages/Product_Pages/Food"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Product_Description from "./pages/Product_Pages/Product_Description"
import Login from "./pages/Login"
import RequestQuote from "./pages/RequestQuote"
import './App.css'
import LegalNotice from "./pages/LegalNotice"

function App() {

  return (
    <Fragment >
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Drinks" element={<Food />} />
            <Route path="/Product" element={<Product_Description />} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Requestaquote" element={<RequestQuote />} />
            <Route path="/Legalnotice" element={<LegalNotice />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
