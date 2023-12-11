/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Suspense, createContext, useEffect, useState } from "react";
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
import axios from "axios";
export const Context = createContext();
function App() {
  const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2M4ODVmYTYtODU3MS00Yzc2LTllMjgtOGU1MTc0NGNmNTdhLyIsImlhdCI6MTcwMjI5MTgwMywibmJmIjoxNzAyMjkxODAzLCJleHAiOjE3MDIyOTU3MDMsImFpbyI6IkUyVmdZRGc0L2VwV28zT1RQeGRuUFg4Nmo3WDRIZ0E9IiwiYXBwaWQiOiJhODM5MWI5Yy00NTgzLTQ2YzMtYTQ0OS1hMGRlNmUxOTkxNjEiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83Yzg4NWZhNi04NTcxLTRjNzYtOWUyOC04ZTUxNzQ0Y2Y1N2EvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI1ZmNkNzk2Yy1kNWE0LTRiYzAtOWRkMS02YmQyMmZhNWFlZjUiLCJyaCI6IjAuQVF3QXBsLUlmSEdGZGt5ZUtJNVJkRXoxZWozdmJabHNzMU5CaGdlbV9Ud0J1SjhNQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiNWZjZDc5NmMtZDVhNC00YmMwLTlkZDEtNmJkMjJmYTVhZWY1IiwidGlkIjoiN2M4ODVmYTYtODU3MS00Yzc2LTllMjgtOGU1MTc0NGNmNTdhIiwidXRpIjoiR3V3cjlocUJvRUNWQ0FHRURXdG9BQSIsInZlciI6IjEuMCJ9.i0AJCZ3IrMo92p0rvUI_LF3dMOrufBkp5lUJUCj90j7J08jI9uY1dUETLnLJUpJbaoDqomum3RtC6-peoYckhHTxprEGsaONr3mosAYkpKPYy7T_CsmW91cWVwLbpT_zfYdJT-PqjsBo2jbBq65UDtWuqUN37YxK9S6TNkwCvjjQ2Y3CBmQ34QPOFvuGq0_JzsQvQ4D8YW9IxqPqZoFd3dV7kF2XwfQVSbSLt-8yrGT2yv0F4xueXBKeS-IFMmiqtgau9_oQ6OUG5OuIHBUk8vDrEXQUMQ3nou46idh3Q5DLBYUBfSUj-Mf_LHTCpmn0HaI3DAsSJ8aPL1JYGevXkQ';

  //    States
  const [counts, setCounts] = useState({});
  const [data, setData] = useState([]);
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(parseInt(localStorage.getItem('itemsPerPage'), 10) || 10);
  const [currentPage, setCurrentPage] = useState(parseInt(localStorage.getItem('currentPage'), 10) || 1);
  const [pricePerPage, setPricePerPage] = useState(itemsPerPage * 50);

  // API CALLS
  // Items API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox1/ODataV4/Company(%27My%20Company%27)/ItemApi?$top=${itemsPerPage}&$skip=${(currentPage - 1) * itemsPerPage}`, {
          headers: { "Authorization": `Bearer ${accessToken}` },
        });
        setData(res.data.value);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    setCounts((prevCounts) => {
      const initialCounts = {};
      data.forEach((_, index) => { initialCounts[index] = prevCounts[index] || 0; });
      return initialCounts;
    });
    if (currentPage === 1) { fetchData(); }
  }, [currentPage, itemsPerPage, accessToken]);



  // Price API
  useEffect(() => {
    const fetchPrices = async () => {
      try {

        const response = await fetch(`https://api.businesscentral.dynamics.com/v2.0/Sandbox1/api/bctech/demo/v2.0/Companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/SalesPrice?$top=${pricePerPage}&$skip=${(currentPage - 1) * itemsPerPage}`, {
          headers: { "Authorization": `Bearer ${accessToken}` },
        });

        const data = await response.json();
        console.log('Fetched prices:', data.value);
        setPrices(data.value);
      } catch (error) {
        console.error('Error fetching prices:', error);
      }
    };

    fetchPrices();
  }, [currentPage, accessToken, itemsPerPage]);
  return (
    <Context.Provider value={
      [counts, setCounts, data, setData, loading, setLoading, itemsPerPage, setItemsPerPage, currentPage, setCurrentPage, prices, setPrices]
    }>
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
    </Context.Provider>
  );
}

export default App;
