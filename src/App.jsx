import { Fragment, Suspense } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import Products from "./pages/Product_Pages/Products";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Product_Description from "./pages/Product_Pages/Product_Description";
import Login from "./pages/Login";
import RequestQuote from "./pages/RequestQuote";
import './App.css';
import LegalNotice from "./pages/LegalNotice";
import { ToastContainer } from "react-toastify";
function App() {


  return (
    <Fragment>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Layout>
            <ToastContainer />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Products/:category" element={<Products />} />
              <Route path="/ProductDescription" element={<Product_Description />} />
              <Route path="/About" element={<About />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Requestaquote" element={<RequestQuote />} />
              <Route path="/Legalnotice" element={<LegalNotice />} />
            </Routes>
          </Layout>
        </Suspense>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
